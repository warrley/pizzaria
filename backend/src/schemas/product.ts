import { z } from "zod";

export const registerProductSchema = z.object({
    name: z.string(),
    price: z.string(),
    description: z.string(),
    category_id: z.string(),
})