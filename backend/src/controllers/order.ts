import { RequestHandler } from "express";
import { createOrder } from "../services/order";

export const registerOrder: RequestHandler = async (req, res) => {
    const { table, name } = req.body;
    if(!table) {
        res.json({ error: "Invalid data" });
        return;
    }

    const order = await createOrder(table, name);

    res.json({ order });
} 