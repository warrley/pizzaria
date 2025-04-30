import express from "express";
import * as CategoryController from "../controllers/category";
import { authenticaded } from "../middleware/authenticaded";

export const categoryRouter = express.Router();

categoryRouter.post("/", authenticaded, CategoryController.register);
categoryRouter.get("/", authenticaded, CategoryController.list)