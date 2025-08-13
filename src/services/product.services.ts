import Product from "../models/Product.model";

const productServices = {
  // fetch all products
  fetchProducts: async () => {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      throw error;
    }
  },
};

export default productServices;
