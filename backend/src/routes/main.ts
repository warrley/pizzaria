import express from "express";

export const mainRouter = express.Router();

mainRouter.get("/ping", (req, res) => {
    res.json({ pong: true });
})