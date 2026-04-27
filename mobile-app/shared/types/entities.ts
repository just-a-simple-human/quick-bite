export interface ICategory {
  id: number;
  name: string;
  slug: string;
}

export interface IMenuItem {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  category: ICategory;
}
