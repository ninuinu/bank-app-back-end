import { Request, Response } from "express";
import { SessionsService } from "../services/sessions.service";
import { UsersService } from "../services/users.service";

export async function createUserSession(req: Request, res: Response){
  try {
    const userName = req.query.userName;
    const password = req.query.password;
    await UsersService.createUser(String(userName), String(password));
    return res.status(201).send('user created');
  } catch (error: any) {
    return res.send(error);
  }
}


export function getUserSession(req: Request, res: Response){
  try{

  }
  catch (err:any) {

  }
}

export function deleteUserSession(req: Request, res: Response){
  try{

  }
  catch (err:any) {

  }
}