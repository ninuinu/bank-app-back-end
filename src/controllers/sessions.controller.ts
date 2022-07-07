import { Request, Response } from "express";
import { SessionsService } from "../services/sessions.service";
import { UsersService } from "../services/users.service";


// at log in
export async function createUserSession(req: Request, res: Response){
  try {

    // verify password
    // create safe user (omit pwd etc.)
    // create access token
    // create refresh token
    // add to cookies


    const password = req.query.password;
    const userName = req.query.userName;

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