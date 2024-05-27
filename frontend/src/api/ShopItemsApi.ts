import { ShopItemProps } from "../types/shop/ShopItem/ShopItem";
import BaseApi from "./BaseApi";

class ShopItemsApi extends BaseApi {
  fetchAllItems(): Promise<ShopItemProps[]> {
    // @ts-ignore
    return this.performGet("/api/v1/items/get");
  }

  removeItem(id: ShopItemProps["id"]): Promise<string> {
    return this.performDelete(`/api/v1/items/remove/${id}`);
  }

  addItem(item: Partial<ShopItemProps>): Promise<ShopItemProps> {
    // @ts-ignore
    return this.performPost(`/api/v1/items/add`, item);
  }

  editItem(
    itemToEditId: ShopItemProps["id"],
    itemModifications: Partial<ShopItemProps>
  ): Promise<ShopItemProps> {
    // @ts-ignore
    return this.performEdit(
      `/api/v1/items/edit/${itemToEditId}`,
      itemModifications
    );
  }
}

export default new ShopItemsApi();
