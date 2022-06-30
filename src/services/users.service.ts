import { usersTable } from "../database/users.table";
const bcrypt = require('bcrypt');
const crypto = require('crypto');

export class UsersService {
  static database = usersTable;

  public static getUser(userId: string) {
    
    const user = this.database.filter((user) => user.id === userId);
    return user;
  }

  public static async createUser(userName: any, password: any){

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const userId = crypto.randomUUID();

    const user = {id: userId, name: userName, password: hashedPassword}
    this.database.push(user);
    console.log(this.database);
    return
  }
}
