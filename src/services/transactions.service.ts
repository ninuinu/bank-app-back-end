import { TransactionEntity, transactionsTable } from "../database/transactions.table";


export class TransactionsService {
  static database = transactionsTable;

  public static getTransactions(accountNumber: number) {
    const transactions:TransactionEntity[] = this.database.filter(
      (transaction:TransactionEntity) => transaction.account === accountNumber
    );
    return transactions;
  }

  public static getTransaction(transactionId: number) {
    const transaction:TransactionEntity[] = this.database.filter(
      (transaction:TransactionEntity) => transaction.id === transactionId
    );
    return transaction;
  }
}
