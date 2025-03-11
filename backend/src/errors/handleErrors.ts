import { ErrorRequestHandler, RequestHandler } from "express";

export const notFound: RequestHandler = (req, res) => {
    res.status(400).json({ error: 'Rout not found' });
};

export const serverError: ErrorRequestHandler = (err, req, res, next) => {
    res.status(500).json({ error: "internal server error" });
};