import { Router } from "express";
import * as UserController from "./controllers/auth"
import { authenticaded } from "./middleware/authenticaded";

export const router = Router();

router.post("/auth/register", UserController.register);
router.post("/auth/login", UserController.login);
router.get("/info", authenticaded, UserController.info);