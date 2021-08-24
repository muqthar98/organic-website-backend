import User from "../model/userSchema.js";
import { users } from "../constants/users.js";
import Product from "../model/productSchema.js";
import { products } from "../constants/product.js";

const userData = async () => {
  try {
    await User.deleteMany({});
    await User.insertMany(users);
    console.log("UserData is imported");
  } catch (err) {
    console.log("Error", err.message);
  }
};

const productData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("ProductData is imported Successfully");
  } catch (err) {
    console.log("Error", err.message);
  }
};

export { userData, productData };
