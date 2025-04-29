import jwt from "jsonwebtoken";

type User = {
    name: string,
    email: string;
    id: string
}

export const createToken = async (user: User) => {
    const token = jwt.sign(
        {
            name: user.name,
            email: user.email
        },
        process.env.JWT_SECRET as string,
        { expiresIn: '2h'   }
    );
    return token;
};

export const verifyToken = async (token: string) => {
    const tokenJWT = jwt.verify(token, process.env.JWT_SECRET as string);

    return tokenJWT;
};