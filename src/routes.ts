import {Express} from 'express';
import {getTransaction, getTransactions} from "./controllers/transactions.controller";

export function routes(app: Express){
    app.get('/transactions', getTransactions);
}