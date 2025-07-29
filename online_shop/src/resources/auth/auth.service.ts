import { Injectable } from "@nestjs/common";
import { USERS_DATA } from "src/users_data/users_data";

@Injectable()
export class AuthService {
  public users = USERS_DATA;

  login(email: string, password: string) {
    const user = this.users.find(
      (e) => e.email === email && e.password === password
    );

    if (!user) {
      throw new Error("User with such credentials was not found!");
    }

    const { password: _, ...safeUser } = user;
    return safeUser;
  }
}