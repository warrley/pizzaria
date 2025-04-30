import prismaClient from "../prisma"

export const createProduct = async (name: string, price: string, description: string, banner: string, category_id: string) => {
    const product = await prismaClient.product.create({
        data: {
            name,
            price,
            description,
            banner,
            category_id
        }
    });

    return product;
};