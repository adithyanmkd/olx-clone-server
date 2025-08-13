import { Router } from "express";

const router = Router();

// import controllers
import productController from "../controllers/product.controllers";

router.get("/", productController.fetchProduct); // fetch all product
router.post("/add", productController.createProduct); // create product

export default router;
