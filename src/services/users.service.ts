import { usersTable } from "../database/users.table";
import { constants } from "crypto";
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const lodash = require('lodash');

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
  }

  public static async authenticateUser(userName: string, password: any){
    const user = this.database.find((user) => {return user.name === userName});

    if (user) {
      const correctPassword = await bcrypt.compare(password, user.password);
      console.log("correctPassword: ",correctPassword);
      if (correctPassword) {
        const safeUser = lodash.omit(user, 'password');
        return safeUser;
      }
      else{
        return false;
      }
    }
    return false;
  }
}
