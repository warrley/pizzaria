import express from "express";
import { router } from "./routes";
import { notFound, serverError } from "./errors/handleErrors";
import cors from 'cors'

const server = express();
server.use(express.json());
server.use(cors());

server.use("/", router);
server.use(notFound);
server.use(serverError);

server.listen(3000, () => {
    console.log("SERVER ONLINE");
});