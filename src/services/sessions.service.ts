import crypto from "crypto";
import bcrypt from "bcrypt";
import { UsersService } from "./users.service";
import { UsersEntity } from "../database/users.table";

export class SessionsService {

  static refreshTokens:string[] = [];

  public static async createUserSession(userName: any, password: any){

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = {name: userName, password: hashedPassword}
  UsersService.database.push(user);
  }
  public static getUserSession(){

  }
  public static deleteUserSession(){

  }
  }

