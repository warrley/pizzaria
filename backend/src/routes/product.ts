import express from "express";
import multer from "multer";
import * as productController from "../controllers/product";
import { authenticaded } from "../middleware/authenticaded";
import { upload as uploadConfig } from "../blib/multer";

export const productRouter = express.Router();

const upload = multer(uploadConfig("./tmp"));

productRouter.post("/", authenticaded, upload.single("file"), productController.registerProduct);
productRouter.get("/", authenticaded, productController.listProductCategory);