import { Router } from "express";

const router = Router();

// import controllers
import productController from "../controllers/product.controllers";

router.get("/", productController.fetchProduct);

export default router;
