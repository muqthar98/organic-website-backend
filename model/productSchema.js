import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: Number,
  price: Number,
  title: String,
  description: String,
  category: String,
  image: {data:Buffer,contentType: String},
  countInStock:Number,
});

const product = mongoose.model("products", productSchema);

export default product;
