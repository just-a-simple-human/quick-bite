import { Category } from 'src/entities/category.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';
import { Tag } from './tag.entity';

@Entity({ name: 'menu_item' })
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  thumbnail: string;
  @Column({ type: 'numeric' })
  price: number;
  @ManyToOne(() => Category, (category) => category.menuItems)
  category: Category;
  @ManyToMany(() => Tag, (tag) => tag.menuItems)
  tags: Tag[];
  @ManyToMany(() => Order)
  orders: Order[];
}
