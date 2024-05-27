import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterItems } from "../../types/shop/Filter/Filter";
import { ShopItemProps } from "../../types/shop/ShopItem/ShopItem";
import { addItem, deleteItem, editItem, fetchAllItems } from "../thunk/thunk";

export interface ShopItemsState {
  shopItems: ShopItemProps[];
  filters: FilterItems[];
}

const initialState: ShopItemsState = {
  shopItems: [],
  filters: [],
};

function filterItems(itemsToFilter: ShopItemProps[], filters: FilterItems[]) {
  return itemsToFilter.filter((item) => {
    const filtersToApply = filters.filter((filter) => !!filter.value);
    return (
      filtersToApply.length === 0 ||
      filtersToApply.every((filter) => filter.apply(item))
    );
  });
}

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    updateFilters(state, action: PayloadAction<FilterItems[]>) {
      action.payload.forEach((filter) => {
        const existing = state.filters.find(
          (stateFilter) => stateFilter.inputName === filter.inputName
        );

        existing ? (existing.value = filter.value) : state.filters.push(filter);
      });

      state.shopItems = filterItems(state.shopItems, state.filters);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchAllItems.fulfilled, (state, action) => {
        state.shopItems = filterItems(action.payload, state.filters);
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.shopItems = state.shopItems.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.shopItems.push(action.payload);
      })
      .addCase(editItem.fulfilled, (state, action) => {
        const index = state.shopItems.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.shopItems[index] = action.payload;
        }
      });
  },
});

// Action creators are generated for each case reducer function
export const { updateFilters } = itemsSlice.actions;

export default itemsSlice.reducer;
