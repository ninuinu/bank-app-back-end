import {Request, Response} from "express";

export function getTransactions(req: Request, res: Response) {
    try {
        console.log("hello");
        const accountNumber = req.query.accountNumber as string;
        return res.send(accountNumber);
    } catch (error: any) {
        return res.send(error);
    }
}

export function getTransaction(req: Request, res: Response) {
    return null
}