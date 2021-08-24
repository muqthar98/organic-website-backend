import Product from "../model/productSchema.js";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if(products){
    res.json(products);
    }else{
      res.status(400).message('Product not Found')
    }
  } catch (error) {
    console.log("Error", error.message);
  }
};

const getProductById = async (req, res) => {
  try{
    const product = await Product.findById(req.params.id)
    if(product){
      res.json(product)
    }
    else{
      res.status(400).message('Product not Found')
    }
  }catch(error){
    console.log("Error",error.message)
  }
}

export {getProducts,getProductById}
