import { Request, Response } from "express";
import { AccountsService } from "../services/accounts.service";
import { accountsTable } from "../database/accounts.table";

export function getAccounts(req: Request, res: Response) {
  try {
    const userId = req.query.userId;
    const accounts = AccountsService.getAccounts(Number(userId));
    return res.send(accounts);
  } catch (error: any) {
    return res.send(error);
  }
}

export function getAccount(req: Request, res: Response) {
  try {
    const accountNumber = req.query.accountNumber;
    const account = AccountsService.getAccount(Number(accountNumber));
    return res.send(account);
  } catch (error: any) {
    return res.send(error);
  }
}

// bonus
export function updateAccountName(req: Request, res: Response) {
  return null;
}

// bonus
export function createAccount(req: Request, res: Response) {
  return null;
}

// bonus
export function deleteAccount(req: Request, res: Response) {
  return null;
}
