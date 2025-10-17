import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MenuItem } from './menu-item.entity';

@Entity({ name: 'tag' })
export class Tag {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ type: 'text' })
  name: string;
  @ManyToMany(() => MenuItem)
  @JoinTable({
    name: 'tag_menu_item',
    joinColumn: { name: 'tag_id' },
    inverseJoinColumn: { name: 'menu_item_id' },
  })
  menuItems: MenuItem[];
}
