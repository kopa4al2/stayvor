import { createAsyncThunk } from "@reduxjs/toolkit";
import ShopItemsApi from "../../api/ShopItemsApi";
import { ShopItemProps } from "../../types/shop/ShopItem/ShopItem";

export const fetchAllItems = createAsyncThunk(
  "/items/get-all",
  async (thunkAPI) => {
    return await ShopItemsApi.fetchAllItems();
  }
);

export const deleteItem = createAsyncThunk(
  "/items/remove",
  async (id: ShopItemProps["id"]) => {
    await ShopItemsApi.removeItem(id);
    return id;
  }
);

export const addItem = createAsyncThunk(
  "/items/add",
  async (item: Partial<ShopItemProps>) => {
    return await ShopItemsApi.addItem(item);
  }
);

export const editItem = createAsyncThunk(
  "/items/edit",
  async (item: Partial<ShopItemProps>) => {
    return await ShopItemsApi.editItem(item.id, item);
  }
);
