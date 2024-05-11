import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ShopItem } from "../../types/shop/ShopItem/ShopItem";
import ShopItemsApi from "../../api/ShopItemsApi";
import { FilterItems } from "../../types/shop/Filter/Filter";

export interface ShopItemsState {
    shopItems: ShopItem[],
    filters: FilterItems[]
}

const initialState: ShopItemsState = {
    shopItems: [],
    filters: [],
}

export const fetchAllItems = createAsyncThunk(
    '/items/get-all',
    async (thunkAPI) => {
        return await ShopItemsApi.fetchAllItems()
    },
)

export const deleteItem = createAsyncThunk(
    '/items/remove',
    async (id: number) => {
        await ShopItemsApi.removeItem(id)
        return id;
    },
)

export const addItem = createAsyncThunk(
    '/items/add',
    async (item: Partial<ShopItem>) => {
        return await ShopItemsApi.addItem(item);
    },
)

function filterItems(itemsToFilter: ShopItem[], filters: FilterItems[]) {
    return itemsToFilter.filter(item => {
        const filtersToApply = filters.filter(filter => !!filter.value)
        return filtersToApply.length === 0 || filtersToApply.every(filter => filter.apply(item));
    });
}

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        updateFilters(state, action: PayloadAction<FilterItems[]>) {
            action.payload.forEach(filter => {
                const existing = state.filters.find(stateFilter => stateFilter.inputName === filter.inputName);

                existing
                    ? existing.value = filter.value
                    : state.filters.push(filter);
            })

            state.shopItems = filterItems(state.shopItems, state.filters);
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchAllItems.fulfilled,
                (state, action) => {
                    state.shopItems = filterItems(action.payload, state.filters);
                })
            .addCase(deleteItem.fulfilled,
                (state, action) => {
                    state.shopItems = state.shopItems.filter(item => item.id !== action.payload)
                })
            .addCase(addItem.fulfilled,
                (state, action) => {
                    state.shopItems.push(action.payload)
                })
    },
})

// Action creators are generated for each case reducer function
export const { updateFilters } = itemsSlice.actions

export default itemsSlice.reducer