import BaseApi from "./BaseApi";
import { ShopItem } from "../types/shop/ShopItem/ShopItem";

class ShopItemsApi extends BaseApi {
    fetchAllItems() :Promise<ShopItem[]> {
        // @ts-ignore
        return this.performGet("/api/v1/items/get");
    }

    removeItem(id:number) :Promise<string> {
        return this.performDelete(`/api/v1/items/remove/${id}`);
    }
}

export default new ShopItemsApi();