import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 300 })
  description: string;

  @Column('decimal')
  price: number;

  @Column()
  category: string;

  @Column()
  in_stock: boolean;
}