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

export const createItem = async (order_id: string, product_id: string, amount: number) => {
    try{
        const order = await prismaClient.item.create({
            data: {
                order_id,
                product_id,
                amount
            }
        });
        return order;
    } catch {
        return {error: "Order invalid"};
    };
};

export const deleteItem = async (id: string) => {
    try{
        const order = await prismaClient.item.delete({
            where: {
                id
            }
        });
        return order;
    } catch {
        return {error: "Invalid item"};
    };
};