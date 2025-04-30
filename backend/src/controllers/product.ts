import { RequestHandler } from "express";
import { createProduct, filterByCategory } from "../services/product";
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

export const listProductCategory: RequestHandler = async (req, res) => {
    const category_id = req.query.category_id;
    if(!category_id) {
        res.json({ error: "Category id is required" });
        return;
    };

    const products = await filterByCategory(category_id as string);

    res.json({ products });
}