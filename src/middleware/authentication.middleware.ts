import { Request, Response } from "express";

const jwt = require('jsonwebtoken');

export function authenticateToken(req:Request, res:Response, next:any){

  const token = req.headers['authorization'] as string;
  if (token === null){
    return res.status(401);
  }
  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err:any, user:any)=>{
    if(err) return res.status(403);
    req.body = user;
    next();
  });

}