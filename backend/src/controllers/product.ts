import { RequestHandler } from "express";
import { createProduct } from "../services/product";
import { registerProductSchema } from "../schemas/product";

export const registerProduct: RequestHandler = async(req, res) => {
    const safeData = await registerProductSchema.safeParse(req.body);
    if(!safeData.success) {
        res.json({ error: safeData.error.flatten().fieldErrors });
    };

    const {name, price, description, category_id} = req.body;

    if(!req.file) {
        res.json({ error: "Error upload file" });
        return;
    }

    const { originalname, filename: banner} = req.file;

    console.log(banner);

    const product = await createProduct(name, price, description, banner, category_id );

    res.json({ product });
}