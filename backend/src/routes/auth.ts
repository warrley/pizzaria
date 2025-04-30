import { Router } from "express";
import { authenticaded } from "../middleware/authenticaded";
import * as UserController from "../controllers/auth"

export const authRouter = Router();

authRouter.post("/register", UserController.register);
authRouter.post("/login", UserController.login);
authRouter.get("/info", authenticaded, UserController.info);

