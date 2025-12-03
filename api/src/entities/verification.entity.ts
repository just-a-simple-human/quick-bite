import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from './customer.entity';

@Entity({ name: 'verification' })
export class Verification {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  code: string;
  @Column({ type: 'boolean' })
  verified: boolean;
  @OneToOne(() => Customer, (customer) => customer.verification)
  customer: Customer;
}
