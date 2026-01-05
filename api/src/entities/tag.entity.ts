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
  menuItems: MenuItem[];
  @Column({ name: 'high_priority', type: 'boolean' })
  highPriority: boolean;
}
