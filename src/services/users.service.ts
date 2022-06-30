import { Request, Response } from "express";

require('dotenv').config()
import { usersTable } from "../database/users.table";
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const lodash = require('lodash');
import jwt from "jsonwebtoken";

export class UsersService {
  static database = usersTable;
  static refreshTokens:string[] = [];

  public static getUser(userId: string) {

    const user = this.database.filter((user) => user.id === userId);
    return user;
  }

  public static getUserByUserName(userName:string){
    const user = this.database.filter((user) => user.name === userName);
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
      if (correctPassword) {
        const safeUser = lodash.omit(user, 'password');

        const accessToken = jwt.sign(safeUser, process.env.ACCESS_TOKEN_SECRET as string, {expiresIn: '30s'});
        const refreshToken = jwt.sign(safeUser, process.env.REFRESH_TOKEN_SECRET as string, {expiresIn: '72h'});

        this.refreshTokens.push(refreshToken);

        return {'accessToken': accessToken, 'refreshToken': refreshToken};
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }

  public static async createToken(refreshToken:any){
    if(refreshToken=== null) {
      return false;
    }
    if(!this.refreshTokens.includes(refreshToken)){
      return false;
    }
    return jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string, (err:any,user:any) => {
      if(err){
        return false;
      }
      const safeUser = lodash.omit(user, ['password', 'iat', 'exp']);
      const accessToken = jwt.sign(safeUser, process.env.ACCESS_TOKEN_SECRET as string, {expiresIn: '30s'});
      return {'accessToken': accessToken}
    })
  }

  public static deauthenticateUser(token:any){
    this.refreshTokens = this.refreshTokens.filter(t => t !== token);
    return "success";
  }
}
