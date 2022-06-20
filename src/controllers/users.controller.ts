import { Request, Response } from "express";
import { usersTable } from "../database/users.table";
import { usersService } from "../services/users.service";

export function getUser(req: Request, res: Response) {
  try {
    const userId = req.query.userId;
    const user = usersService.getUser(Number(userId));
    return res.send(user);
  } catch (error: any) {
    return res.send(error);
  }
}
