import { usersTable } from "../database/users.table";

export class UsersService {
  static database = usersTable;

  public static getUser(userId: number) {
    const user = this.database.filter((user) => user.userId === userId);
    return user;
  }

  public static createUserToken(){
    return
  }
}
