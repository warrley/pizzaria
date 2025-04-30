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

export const filterByCategory = async (category_id: string) => {
    const products = await prismaClient.product.findMany({
        where: {
            category_id
        }
    });
    
    if(products.length == 0) {
        return {error: "Invalid category id"};
    } else {
        return products;
    }

};