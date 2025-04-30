import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../blib/jwt";

export interface ExtendedRequest extends Request {
    user_email: string;
};

export const authenticaded = async (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization?.split(" ")[1];
    if(!authToken) {
        res.status(401).json({ error: "Token is required" });
        return;
    }

    try{
        const token = await verifyToken(authToken);
        (req as ExtendedRequest).user_email = token.email;
        return next();
    } catch{
        res.status(401).json({ error: "Invalid token" })
    }
};