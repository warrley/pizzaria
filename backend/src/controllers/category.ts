import { RequestHandler } from "express";
import { listCategory, registerCategory } from "../services/category";

export const register: RequestHandler = async (req, res) => {
    const { name } = req.body;
    if(!name) {
        res.json({ error: "Name is required" });
        return;
    };

    const category = await registerCategory(name);
    res.json({ category });
}

export const list: RequestHandler = async (req, res) => {
    const categorys = await listCategory();
    res.json({ categorys: categorys});
}