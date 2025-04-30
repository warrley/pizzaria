import { RequestHandler } from "express";
import { createOrder, deleteOrder } from "../services/order";

export const registerOrder: RequestHandler = async (req, res) => {
    const { table, name } = req.body;
    if(!table) {
        res.json({ error: "Invalid data" });
        return;
    }

    const order = await createOrder(table, name);

    res.json({ order });
} 

export const removeOrder: RequestHandler = async (req, res) => {
    const order_id = req.query.order_id as string;
    if(!order_id) {
        res.json({ error: "order id is required" });
        return;
    }

    const order = await deleteOrder(order_id);

    res.json({ order });
}