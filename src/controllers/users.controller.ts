import { Request, Response } from "express";
import { UsersService } from "../services/users.service";

export function getUser(req: Request, res: Response) {
  try {
    const userId = req.query.userId;
    const user = UsersService.getUser(Number(userId));
    return res.send(user);
  } catch (error: any) {
    return res.send(error);
  }
}
