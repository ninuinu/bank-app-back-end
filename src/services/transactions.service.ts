import { transactionsTable } from "../database/transactions.table";

export class transactionsService {
  static database = transactionsTable;

  public static getTransactions(accountNumber: number) {
    const transactions = this.database.filter(
      (transaction) => transaction.account === accountNumber
    );
    return transactions;
  }

  public static getTransaction(transactionId: number) {
    const transaction = this.database.filter(
      (transaction) => transaction.id === transactionId
    );
    return transaction;
  }
}
