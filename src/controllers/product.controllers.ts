import { Request, Response } from "express";

// import services
import productServices from "../services/product.services";
import mongoose from "mongoose";

// Fetching all product
const fetchProduct = async (_req: Request, res: Response) => {
  try {
    const products = await productServices.fetchProducts();

    return res.status(200).json({
      success: true,
      data: products,
      message: "Successfully fetched products.",
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    let message = "Internal server error";
    return res.status(500).json({
      success: false,
      message,
    });
  }
};

// creating product
const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log("Data log: ", data);
    const newProduct = await productServices.createProduct(data);

    return res.status(200).json({
      success: true,
      message: "Successfully added product.",
      data: newProduct,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    let message = "Internal server error";
    return res.status(500).json({
      success: false,
      message,
    });
  }
};

// updating product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const updates = req.body;
    const productId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid product ID format." });
    }

    const updatedProduct = await productServices.updateProduct({
      id: productId,
      updates,
    });

    return res.status(200).json({
      success: true,
      updatedProduct,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    let message = "Internal server error";
    return res.status(500).json({
      success: false,
      message,
    });
  }
};

// delete product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid product ID format." });
    }

    const deletedProduct = await productServices.deleteProduct(productId);
    return res.status(200).json({
      success: true,
      message: "Successfully deleted product.",
      data: deletedProduct,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    let message = "Internal server error";
    return res.status(500).json({
      success: false,
      message,
    });
  }
};

const productController = {
  fetchProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};

export default productController;
