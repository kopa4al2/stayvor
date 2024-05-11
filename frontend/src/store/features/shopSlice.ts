import type { AsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ShopItem } from "../../types/shop/ShopItem/ShopItem";
import ShopItemsApi from "../../api/ShopItemsApi";

export interface ShopItemsState {
    shopItems: ShopItem[]
}

const initialState: ShopItemsState = {
    shopItems: [],
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

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchAllItems.fulfilled,
                (state, action) => {
                    state.shopItems = action.payload
                })
            .addCase(deleteItem.fulfilled,
                (state, action) => {
                    state.shopItems = state.shopItems.filter(item => item.id !== action.payload)
                })
    },
})

// Action creators are generated for each case reducer function
export const {  } = itemsSlice.actions

export default itemsSlice.reducer