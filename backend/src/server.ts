import express from "express";
import cors from "cors";
import path from "path";
import { notFound, serverError } from "./errors/handleErrors";
import { authRouter } from "./routes/auth";
import { mainRouter } from "./routes/main";
import { categoryRouter } from "./routes/category";
import { productRouter } from "./routes/product";

const server = express();
server.use(express.json());
server.use(cors());

server.use("/", mainRouter);
server.use("/auth", authRouter);
server.use("/category", categoryRouter);
server.use("/product", productRouter);

server.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

server.use(notFound);
server.use(serverError);

server.listen(3300, () => {
    console.log("SERVER ONLINE");
});