import { accountsTable } from "../database/accounts.table";

export class AccountsService {
  static database = accountsTable;

  public static getAccounts(userId: number) {
    const accounts = this.database.filter(
      (account) => account.userId === userId
    );
    return accounts;
  }

  public static getAccount(accountNumber: number) {
    const account = accountsTable.filter(
      (account) => account.accountNumber === accountNumber
    );
    return account;
  }

  public static updateAccountName(accountNumber: number, newAccountName: string) {
    const account = accountsTable.filter(
      (account) => account.accountNumber === accountNumber
    );
    account[0].accountName = newAccountName;
  }
}