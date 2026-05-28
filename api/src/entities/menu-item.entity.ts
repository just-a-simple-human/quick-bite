import { Category } from 'src/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
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
  @Column({ unique: true })
  slug: string;
  @Column()
  description: string;
  @Column({ type: 'numeric' })
  price: number;
  @Column({ type: 'real' })
  weight: number;
  @Column({ type: 'real' })
  calories: number;
  @Column({ type: 'real' })
  proteins: number;
  @Column({ type: 'real' })
  fats: number;
  @Column({ type: 'real' })
  carbs: number;
  @Column({ name: 'image', nullable: true })
  image: string;
  @ManyToOne(() => Category, (category) => category.menuItems)
  @JoinColumn({ name: 'category_id' })
  category: Category;
  @ManyToMany(() => Tag, (tag) => tag.menuItems)
  @JoinTable({
    name: 'menu_item_tags',
    joinColumn: { name: 'menu_item_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' },
  })
  tags: Tag[];
  @ManyToMany(() => Order)
  orders: Order[];
}
