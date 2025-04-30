import prismaClient from "../prisma";

export const registerCategory = async (name: string) => {
    const category = await prismaClient.category.create({
        data: {
            name
        },
        select: {
            id: true,
            name: true
        }
    });

    return category;
};

export const listCategory = async () => {
    const category = await prismaClient.category.findMany({
        select: {
            id: true,
            name: true
        }
    });

    return category;
}