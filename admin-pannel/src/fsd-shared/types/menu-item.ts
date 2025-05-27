import { ICategory } from "./category";

export interface IMenuItem {
  id: number;
  image: string;
  name: string;
  category: ICategory;
  price: number;
  thumbnail: string;
}
