import { Express } from "express";
import { getUser, createUserToken } from "./controllers/users.controller";
import { getAccounts, getAccount, updateAccountName } from "./controllers/accounts.controller";
import {
  getTransaction,
  getTransactions
} from "./controllers/transactions.controller";

export function routes(app: Express) {
  /** USER ROUTES **/
  app.get("/user", getUser);

  /** ACCOUNT ROUTES **/
  app.get("/accounts", getAccounts);
  app.get("/account", getAccount);
  app.post("/accountName", updateAccountName);

  /** TRANSACTION ROUTES **/
  app.get("/transactions", getTransactions);
  app.get("/transaction", getTransaction);

  app.post("/login", createUserToken);

}