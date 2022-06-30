import { Request, Response } from "express";

require('dotenv').config()
import { usersTable } from "../database/users.table";
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const lodash = require('lodash');
const jwt = require('jsonwebtoken');

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

        const accessToken = jwt.sign(safeUser, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30s'});
        const refreshToken = jwt.sign(safeUser, process.env.REFRESH_TOKEN_SECRET);

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

  public static createToken(refreshToken:any){
    console.log("1\n");
    if(refreshToken=== null) {
      console.log("2");
      return false;
    }
    console.log("refreshToken:", refreshToken);
    console.log("this.refreshTokens:", this.refreshTokens);
    if(!this.refreshTokens.includes(refreshToken)){
      console.log("3");
      return false;
    }
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err:any,user:any) => {
      console.log("4");
      if(err){
        console.log("5");
        return false;
      }
      console.log("6");
      const safeUser = lodash.omit(user, 'password');
      console.log("USER I CREATE TOKEN", user);
      const accessToken = jwt.sign(safeUser, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30s'});
      return {'accessToken': accessToken};
    })
  }



}
