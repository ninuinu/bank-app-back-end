import { Request, Response } from "express";
import { TransactionsService } from "../services/transactions.service";

export function getTransactions(req: Request, res: Response) {
  try {
    const accountNumber = req.query.accountNumber;
    const transactions = TransactionsService.getTransactions(Number(accountNumber));
    return res.send(transactions);
  } catch (error: any) {
    return res.send(error);
  }
}

export function getTransaction(req: Request, res: Response) {
  try {
    const transactionId = req.query.id;
    const transaction = TransactionsService.getTransaction(Number(transactionId));
    return res.send(transaction);
  } catch (error: any) {
    return res.send(error);
  }
}
