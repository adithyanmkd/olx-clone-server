import { Request, Response } from "express";

// import services
import productServices from "../services/product.services";

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

const productController = {
  fetchProduct,
  createProduct,
};

export default productController;
