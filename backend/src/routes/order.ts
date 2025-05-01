import express from "express";
import * as orderController from "../controllers/order";
import { authenticaded } from "../middleware/authenticaded";

export const orderRouter = express.Router();

orderRouter.post("/", authenticaded, orderController.registerOrder);
orderRouter.delete("/", authenticaded, orderController.removeOrder);
orderRouter.post("/add", authenticaded, orderController.registerItem);
orderRouter.delete("/remove", authenticaded, orderController.removeItem);
orderRouter.put("/send", authenticaded, orderController.sendOrder);
orderRouter.get("/list", authenticaded, orderController.listOrders);
orderRouter.get("/detail", authenticaded, orderController.detailOrder);
orderRouter.put("/finish", authenticaded, orderController.finishOrder);