import { Injectable, NotFoundException } from '@nestjs/common';
import { USERS_DATA } from 'src/users_data/users_data';
import { UserDTO } from './dto/users.dto';

@Injectable()
export class UsersService {
    public users = USERS_DATA;

    constructor() { }

    findAll() {
        return this.users.map(({ password, ...user }) => user);
    }

    findOne(id: number) {
        const user = this.users.find((e) => e.id === id);
        if (!user) {
            throw new NotFoundException('User with such id was not found!');
        }
        const { password, ...safeUser } = user;
        return safeUser;
    }

    delete(id: number) {
        const userIndex = this.users.findIndex((e) => e.id === id);
        if (userIndex === -1) {
            throw new NotFoundException('User with such id was not found!');
        }
        this.users.splice(userIndex, 1);
    }

    create(user: Omit<UserDTO, 'id'>) {
        const newId = Math.max(...this.users.map((p) => p.id)) + 1;
        const newUser = { id: newId, ...user };
        this.users.push(newUser);
        return newUser;
    }
}