import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';

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
  @Column({ name: 'verified_at', type: 'timestamp', nullable: true })
  verifiedAt: Date;
  @OneToMany(() => Order, (order) => order.customer, {
    cascade: true,
  })
  orders: Order[];
}
