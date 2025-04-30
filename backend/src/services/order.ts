import prismaClient from "../prisma"

export const createOrder  = async(table: number, name: string) => {
    const order = await prismaClient.order.create({
        data: {
            table,
            name
        }
    });
    
    return order;
};