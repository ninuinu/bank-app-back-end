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
        (account) => account.accountNumber === Number(accountNumber)
    );
    return account;
  }
}
