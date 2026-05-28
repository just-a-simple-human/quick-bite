import { Category } from 'src/entities/category.entity';
import { Tag } from 'src/entities/tag.entity';

export class CreateMenuItemDto {
  name: string;
  description: string;
  slug: string;
  image?: string;
  category: Category;
  tags: Tag[];
  price: number;
  weight?: number;
  nutritions?: {
    calories: number;
    proteins: number;
    fats: number;
    carbs: number;
  };
}
