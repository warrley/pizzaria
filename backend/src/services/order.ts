import prismaClient from "../prisma"

export const createOrder = async(table: number, name: string) => {
    const order = await prismaClient.order.create({
        data: {
            table,
            name
        }
    });
    
    return order;
};

export const deleteOrder = async (order_id: string) => {
    try{
        const order = await prismaClient.order.delete({
            where: {
                id: order_id
            }
        });
        return order;
    } catch {
        return {error: "Order not found"};
    }
};