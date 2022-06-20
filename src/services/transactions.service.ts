import { transactionsTable } from "../database/transactions.table";

export class transactionsService{

  static database = transactionsTable;

  public static getTransactions(accountNumber:number){
    const transactions = transactionsTable.filter(
        (transaction) => transaction.account === Number(accountNumber))
    return transactions;
    ;
  }

}