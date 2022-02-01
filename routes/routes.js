import express from "express";
import {
  getProducts,
  getProductById
} from "../controller/product-controller.js";
import {
  getUsersData,
  registerUser,
  loginUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser
} from "../controller/user-controller.js";

const router = express.Router();

//users
router.post("/users/register", registerUser);
router.get("/users/login", loginUser);
router.get("/users/userData", getUsersData);
router.get("/users/getUser", getUser);
router.get("/users/getUserById", getUserById);
router.put("/users/updateUser", updateUser);
router.delete("/users/deleteUser", deleteUser);

//products
router.get("/products", getProducts);
router.get("/product/:id", getProductById);

export default router;
