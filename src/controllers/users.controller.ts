import { Request, Response } from "express";
import { usersTable } from "../database/users.table";

export function getUser(req: Request, res: Response) {
  try {
    const userId = req.query.userId;
    const user = usersTable.filter((user) => user.userId === Number(userId));
    return res.send(user);
  } catch (error: any) {
    return res.send(error);
  }
}