// import models

import ProductModel from "../models/product.model";

// import types
import type { Product } from "../types/product.types";

const productServices = {
  // fetch all products
  fetchProducts: async () => {
    try {
      const products = await ProductModel.find();
      return products;
    } catch (error) {
      throw error;
    }
  },

  // creating new product
  createProduct: async (data: Product) => {
    try {
      const newProduct = await ProductModel.create(data);
      return newProduct;
    } catch (error) {
      throw error;
    }
  },
};

export default productServices;
