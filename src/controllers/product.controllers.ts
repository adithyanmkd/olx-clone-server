import { Request, Response } from "express";

const fetchProduct = (_req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
  });
};

const productController = {
  fetchProduct,
};

export default productController;
