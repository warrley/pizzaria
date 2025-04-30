import prismaClient from "../prisma";
import bcrypt from "bcrypt";

export const getUserByEmail = async (email: string) => {
    const user =  await prismaClient.user.findFirst({
        where: {
            email: email
        },
        select: {
            id: true,
            email: true,
            name: true,
            password: true,
        }
    });

    return user;
};

export const createUser = async (name: string, email: string, password: string) => {
    const hashPassword = (await bcrypt.hash(password, 10)).toString();

    const user = await prismaClient.user.create({
        data: {
            name,
            email,
            password: hashPassword
        },
        select: {
            id: true,
            name: true,
            email: true,
            password: true
        }
    });

    return user;
};