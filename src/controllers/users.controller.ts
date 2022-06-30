import { Request, Response } from "express";
import { UsersService } from "../services/users.service";

export function getUser(req: Request, res: Response) {
  try {
    const userId = req.query.userId;
    const user = UsersService.getUser(String(userId));
    return res.send(user);
  } catch (error: any) {
    return res.send(error);
  }
}

export function getUserByUserName(req: Request, res: Response) {
  try {

    const userName = req.query.userName;
    const user = UsersService.getUserByUserName(String(userName));
    return res.send(user);
  } catch (error: any) {
    return res.send(error);
  }
}

export async function createUser(req: Request, res: Response) {
  try {
    const userName = req.query.userName;
    const password = req.query.password;
    await UsersService.createUser(String(userName), String(password));
    return res.status(201).send('user created');
  } catch (error: any) {
    return res.send(error);
  }
}

export async function authenticateUser(req:Request, res:Response){
  try{
    const userName = req.query.userName;
    const password = req.query.password;

    const tokens = await UsersService.authenticateUser(String(userName), String(password));
    if(tokens){
      return res.status(200).send(tokens);
    }
    else{
      return res.status(401).send();
    }
  }
  catch (error:any){
    return res.send(error);
  }
}

export async function createToken(req: Request, res: Response) {
  try {
    const token = req.query.token;
    const accessToken = await UsersService.createToken(String(token));
    if(accessToken){
      return res.status(200).send(accessToken);
    }
    else{
      return res.status(401).send();
    }
  } catch (error: any) {
    return res.send(error);
  }
}

export function deauthenticateUser(req:Request, res:Response){
  try{
    const token = req.query.token
    const user = UsersService.deauthenticateUser(token);
    if(user){
      return res.status(200).send(user);
    }
    else{
      return res.status(401).send();
    }
  }
  catch(error:any){
    return res.send(error);
  }
}

