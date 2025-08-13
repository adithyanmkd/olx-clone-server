import { Router } from "express";

const router = Router();

// import controllers
import productController from "../controllers/product.controllers";

router.get("/", productController.fetchProduct); // fetch all product
router.post("/add", productController.createProduct); // create product
router.patch("/update/:id", productController.updateProduct); // update product
router.get("/delete/:id", productController.deleteProduct); // delete product

export default router;
