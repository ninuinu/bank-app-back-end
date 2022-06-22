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
      (account: AccountEntity) => account.number === accountNumber
    );
  }

  public static updateAccountName(accountNumber: number, newAccountName: string) {
    console.log(newAccountName);
    console.log(accountNumber);

    for (var i: number = 0; i < this.database.length; i++) {
      if (this.database[i].number === accountNumber) {
        this.database[i].name = newAccountName;
      }
    }
    return this.database;
  }
}
