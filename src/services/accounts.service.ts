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
    console.log(newAccountName);
    console.log(accountNumber);

    for (var i: number = 0; i < this.database.length; i++) {
      if (this.database[i].accountNumber === accountNumber) {
        this.database[i].accountName = newAccountName;
      }
    }
    return this.database;
  }
}
