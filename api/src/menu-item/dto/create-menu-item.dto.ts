import { Category } from 'src/entities/category.entity';
import { Tag } from 'src/entities/tag.entity';

export class CreateMenuItemDto {
  name: string;
  thumbnail: string;
  category: Category;
  tags: Tag[];
  price: number;
}
