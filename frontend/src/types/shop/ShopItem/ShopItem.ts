export interface ShopItemProps {
  id: number;
  price: number;
  publisher: string;
  publishedOn: Date;
}

export interface EditItemProps {
  item: Partial<ShopItemProps>;
}
