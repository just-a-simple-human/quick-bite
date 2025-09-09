import { ICategory } from "./category";

export interface IMenuItem {
  id: number;
  image: {
    sm: string;
    md: string;
  };
  name: string;
  categories: ICategory[];
  price: number;
  thumbnail: string;
}
