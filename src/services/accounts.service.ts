import { AccountEntity, accountsTable } from "../database/accounts.table";

export class AccountsService {
  static database: AccountEntity[] = accountsTable;

  public static getAccounts(userId: number) {
    return this.database.filter(
      (account: AccountEntity) => account.userId === userId
    );
  }

  public static getAccount(accountNumber: number) {
    return this.database.filter(
      (account: AccountEntity) => account.accountNumber === accountNumber
    );
  }

  public static updateAccountName(accountNumber: number, newAccountName: string) {
    console.log(typeof accountNumber);
    this.database.map((account: AccountEntity) => {
      if (account.accountNumber === accountNumber) {
        account.accountName = newAccountName;
      }
    });
    return this.database;
  }
}
