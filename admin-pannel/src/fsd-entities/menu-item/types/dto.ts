import { IMenuItem } from "@/fsd-shared";

export interface IGetMenuItemAllDto {
  resources: IMenuItem[];
  count: number;
}

export interface ICreateMenuItemDto {
  name: string;
  description: string;
  ingredients: string;
  price: number;
  category?: { id: number }[];
}
