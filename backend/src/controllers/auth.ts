import { RequestHandler, Response } from "express";
import { createUserDb, getUserByEmail } from "../services/user";
import { loginUserSchema, registerUserSchema } from "../schemas/auth";
import bcrypt from "bcrypt";
import { createToken } from "../blib/jwt";
import { ExtendedRequest } from "../middleware/authenticaded";


export const register: RequestHandler = async (req, res) => {
    const safeData = registerUserSchema.safeParse(req.body)

    if(!safeData.success) {
        res.json({ error: safeData.error.flatten().fieldErrors });
        return;
    }

    const { name, email, password } = safeData.data;
    
    const hasEmail = await getUserByEmail(email);
    if(hasEmail) {
        res.json({ error: "There is already a user with this email" });
        return;
    }

    const user = await createUserDb(name, email, password);

    res.json(user)
};

export const login: RequestHandler = async (req, res) => {
    const safeData = loginUserSchema.safeParse(req.body);
    if(!safeData.success) {
        res.json({ error: safeData.error.flatten().fieldErrors });
        return;
    };

    const { email, password } = safeData.data;

    const user = await getUserByEmail(email);
    if(!user) {
        res.json({ error: "User not found" });
        return;
    }

    const hashPassword = user.password;
    
    if(!await bcrypt.compare(password, hashPassword)) {
        res.json({ error: "Invalid password" });
        return;
    }

    const token = await createToken(user);

    res.json({ user: user, token: token  })
}

export const info: RequestHandler = async (req, res) => {
    const user_email = (req as ExtendedRequest).user_email;

    const user = await getUserByEmail(user_email);

    res.json({ email: user });
}