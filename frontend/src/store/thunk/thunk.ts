import { createAsyncThunk } from "@reduxjs/toolkit";
import ShopItemsApi from "../../api/ShopItemsApi";
import { ShopItem } from "../../types/shop/ShopItem/ShopItem";

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