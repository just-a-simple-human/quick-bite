export interface ICategory {
  id: number;
  name: string;
  slug: string;
}

export interface IMenuItem {
  id: number;
  name: string;
  description: string;
  slug: string;
  image?: string;
  category: ICategory;
  tags: unknown[];
  price: number;
  weight?: number;
  nutritions?: {
    calories: number;
    proteins: number;
    fats: number;
    carbs: number;
  };
}
