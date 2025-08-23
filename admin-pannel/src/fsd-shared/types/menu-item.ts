import { ICategory } from "./category";

export interface IMenuItem {
  id: number;
  image: string;
  name: string;
  categories: ICategory[];
  price: number;
  thumbnail: string;
}
