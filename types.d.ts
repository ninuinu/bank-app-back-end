declare namespace Express {
  export interface Request extends Request{
    user: any;
  }
  export interface Response {
    user: any;
  }
}