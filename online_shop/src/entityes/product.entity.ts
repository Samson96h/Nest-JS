import { Entity, Column} from 'typeorm';
import { Base } from './base';

@Entity('products')
export class Product extends Base {

  @Column({ length: 100 })
  name: string;

  @Column({ length: 300 })
  description: string;

  @Column('decimal')
  price: number;

  @Column()
  category: string;

  @Column({name:"in_stock"})
  inStock: boolean;
}