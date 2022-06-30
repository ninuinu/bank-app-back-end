import { Express } from "express";
import {
  getUser,
  createUser,
  authenticateUser,
  getUserByUserName, createToken
} from "./controllers/users.controller";
import { getAccounts, getAccount, updateAccountName } from "./controllers/accounts.controller"
import { authenticateToken} from "./middleware/authentication.middleware";
import {
  getTransaction,
  getTransactions
} from "./controllers/transactions.controller";

export function routes(app: Express) {
  /** USER ROUTES **/
  app.get("/user", getUser);
  app.get("/userByUserName", authenticateToken, getUserByUserName);

  app.post("/token",createToken);
  app.post("/signUp", createUser);
  app.post("/logIn", authenticateUser);


  /** ACCOUNT ROUTES **/
  app.get("/accounts", getAccounts);
  app.get("/account", getAccount);
  app.post("/accountName", updateAccountName);

  /** TRANSACTION ROUTES **/
  app.get("/transactions", getTransactions);
  app.get("/transaction", getTransaction);


}