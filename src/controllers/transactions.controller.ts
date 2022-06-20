import { Request, Response } from "express";

export function getTransactions(req: Request, res: Response) {
  try {
    const accountNumber = req.query.accountNumber;
    return res.send(accountNumber);
  } catch (error: any) {
    return res.send(error);
  }
}

export function getTransaction(req: Request, res: Response) {
  try {
    const transactionId = req.query.transactionId;
    // fetch transaction
    return null;
  } catch (error: any) {
    return res.send(error);
  }
}