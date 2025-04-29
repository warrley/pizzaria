import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../blib/jwt";

export const authenticaded = async (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization?.split(" ")[1];
    if(!authToken) {
        res.status(401).json({ error: "Token is required" });
        return;
    }

    try{
        const token = await verifyToken(authToken);
        res.json({ token });
    } catch{
        res.status(401).json({ error: "Invalid token" })
    }
};