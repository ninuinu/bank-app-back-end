import { Request, Response } from "express";
import { transactionsTable } from "../database/transactions.table";
import { transactionsService } from "../services/transactions.service";

export function getTransactions(req: Request, res: Response) {
  try {
    const accountNumber = req.query.accountNumber;
    const transactions = transactionsService.getTransactions(Number(accountNumber));
    return res.send(transactions);
  } catch (error: any) {
    return res.send(error);
  }
}

export function getTransaction(req: Request, res: Response) {
  try {
    const transactionId = req.query.id;
    const transaction = transactionsService.getTransaction(Number(transactionId));
    return res.send(transaction);
  } catch (error: any) {
    return res.send(error);
  }
}
