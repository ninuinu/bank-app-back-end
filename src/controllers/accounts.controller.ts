import {Request, Response} from "express";
import {accountsTable} from "../database/accounts.table";

export function getAccounts(req: Request, res: Response) {
    try {
        const userId = req.query.ownerId;
        const accounts = accountsTable.filter(
            (user) => user.ownerId === Number(userId)
        );
        return res.send(accounts);
    } catch (error: any) {
        return res.send(error);
    }
}


export function getAccount(req: Request, res: Response) {
    return null
}

// bonus
export function updateAccountName(req: Request, res: Response) {
    return null
}

// bonus
export function createAccount(req: Request, res: Response) {
    return null
}

// bonus
export function deleteAccount(req: Request, res: Response) {
    return null
}