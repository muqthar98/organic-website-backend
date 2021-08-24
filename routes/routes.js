import express from "express";
import {getProducts,getProductById} from "../controller/product-controller.js";
import getUsers from "../controller/user-controller.js";

const router = express.Router();

router.get("/users", getUsers);

router.get("/products", getProducts);

router.get("/product/:id",getProductById);

export default router;
