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
    await UsersService.createUser(userName, password);
    return

  } catch (error: any) {
    return res.send(error);
  }
}
