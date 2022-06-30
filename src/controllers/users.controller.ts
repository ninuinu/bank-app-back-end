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
    const accessToken = await UsersService.authenticateUser(String(userName), String(password));
    console.log(accessToken);
    if(accessToken){
      return res.status(200).send({'accessToken': accessToken});
    }
    else{
      return res.status(401).send();
    }
  }
  catch (error:any){
    return res.send(error);
  }
}