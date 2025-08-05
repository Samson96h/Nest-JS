import { Entity, Column, } from 'typeorm';
import { Base } from './base';

export type UserRole = 'user' | 'manager' | 'admin';

@Entity()
export class User extends Base {
    @Column({default: 'user' })
    role: UserRole;

    @Column({ name: "first_name" })
    firstName: string;

    @Column({ name: "last_name" })
    lastName: string;

    @Column({ default: true, name: "is_active" })
    isActive: boolean;

    @Column()
    age: number;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    password: string;
}