import { IUser } from "@/interfaces";
import { Request as ExpressRequest } from "express";

// Extend the Request interface to include the user property when the middleware is used

declare global {
  namespace Express {
    export interface Request {
      user?: IUser;
      token?: IToken;
    }
  }
}