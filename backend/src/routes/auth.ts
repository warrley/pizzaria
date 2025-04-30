import { Router } from "express";
import { authenticaded } from "../middleware/authenticaded";
import * as UserController from "../controllers/auth"

export const authRouter = Router();

authRouter.post("/auth/register", UserController.register);
authRouter.post("/auth/login", UserController.login);
authRouter.get("/info", authenticaded, UserController.info);

