import express from "express";
import * as orderController from "../controllers/order";
import { authenticaded } from "../middleware/authenticaded";

export const orderRouter = express.Router();

orderRouter.post("/", authenticaded, orderController.registerOrder);