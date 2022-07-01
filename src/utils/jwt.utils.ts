import jwt from "jsonwebtoken";
import "dotenv/config.js";

export function signJWT(token:any, key:string){
  try{
    return jwt.sign(token, key);
  }
  catch (err:any){
    return { valid:false, validToken: null };
  }
}

export function verifyJWT(token:any, key:string){
  try{
    const validToken = jwt.verify(token, key);
    return { valid:true, validToken }
  }
  catch (err:any){
    return { valid:false, validToken: null };
  }
}