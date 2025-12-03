import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';
import { Verification } from './verification.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @OneToMany(() => Order, (order) => order.customer, {
    cascade: true,
  })
  orders: Order[];
  @OneToOne(() => Verification, (verification) => verification.customer, {
    cascade: true,
  })
  @JoinColumn({ name: 'customer_verification' })
  verification: Verification;
}
