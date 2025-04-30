import { RequestHandler } from "express";
import { createItem, createOrder, deleteItem, deleteOrder } from "../services/order";
import { addItemSchema } from "../schemas/order";

export const registerOrder: RequestHandler = async (req, res) => {
    const { table, name } = req.body;
    if(!table) {
        res.json({ error: "Invalid data" });
        return;
    }

    const order = await createOrder(table, name);

    res.json({ order });
};

export const removeOrder: RequestHandler = async (req, res) => {
    const order_id = req.query.order_id as string;
    if(!order_id) {
        res.json({ error: "order id is required" });
        return;
    }

    const order = await deleteOrder(order_id);

    res.json({ order });
};

export const registerItem: RequestHandler = async (req, res) => {
    const safeData = addItemSchema.safeParse(req.body);
    if(!safeData.success) {
        res.json({ error: safeData.error.flatten().fieldErrors });
        return;
    }

    const { order_id, product_id, amount } = req.body;

    const item = await createItem(order_id, product_id, amount);

    res.json({ item });
};

export const removeItem: RequestHandler = async (req, res) => {
    const item_id = req.query.item_id as string;
    if(!item_id) {
        res.json({ error: "Item id is required" });
    };

    const item = await deleteItem(item_id);

    res.json({ item });
}