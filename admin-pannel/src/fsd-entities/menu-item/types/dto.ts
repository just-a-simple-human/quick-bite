export interface ICreateMenuItemDto {
  name: string;
  description: string;
  ingredients: string;
  price: number;
  category?: { id: number }[];
}
