import { z } from "zod";

export const addItemSchema = z.object({
    order_id: z.string(),
    product_id: z.string(),
    amount: z.number(),
})