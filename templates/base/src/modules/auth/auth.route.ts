import express, { Router } from "express";
import * as AuthController from './auth.controller'
import { isAuthenticated } from "@/middlewares/auth.middleware";

const authRouter: Router = express.Router();

authRouter.post("/register", AuthController.registerHandler);

authRouter.post("/login", AuthController.loginHandler);

authRouter.post("/logout", isAuthenticated, AuthController.logoutHandler);

// authRouter.get("/check-status", isAuthenticated, AuthController.checkAuthHandler);

export default authRouter;