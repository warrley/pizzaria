import express from "express";
import { notFound, serverError } from "./errors/handleErrors";
import cors from 'cors'
import { authRouter } from "./routes/auth";
import { mainRouter } from "./routes/main";

const server = express();
server.use(express.json());
server.use(cors());

server.use("/", mainRouter);
server.use("/auth", authRouter);

server.use(notFound);
server.use(serverError);

server.listen(3300, () => {
    console.log("SERVER ONLINE");
});