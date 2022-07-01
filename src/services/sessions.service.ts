import crypto from "crypto";
import bcrypt from "bcrypt";

export class SessionsService {

  static refreshTokens:string[] = [];

  public static async createUserSession(userName: any, password: any){

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = {id: userId, name: userName, password: hashedPassword}
  this.database.push(user);
  }
  public static getUserSession(){

  }
  public static deleteUserSession(){

  }
  }

