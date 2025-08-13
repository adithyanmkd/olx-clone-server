// import models

import ProductModel from "../models/product.model";

// import types
import type { Product } from "../types/product.types";

type UpdateProductFields = {
  id: string;
  updates: Partial<Product>;
};

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

  // update product
  updateProduct: async ({ id, updates }: UpdateProductFields) => {
    try {
      const updatedProduct = await ProductModel.findByIdAndUpdate(id, updates, {
        new: true,
      });

      if (!updatedProduct) {
        throw new Error("Product not found");
      }

      return updatedProduct;
    } catch (error) {
      throw error;
    }
  },

  // delete product
  deleteProduct: async (id: string) => {
    try {
      const deletedProduct = await ProductModel.findByIdAndDelete(id);

      if (!deletedProduct) {
        throw new Error("Product not found");
      }

      return deletedProduct;
    } catch (error) {
      throw error;
    }
  },
};

export default productServices;
