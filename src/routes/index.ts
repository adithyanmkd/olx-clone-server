import { Router } from "express";

const router = Router();

// Import routes
import productRoutes from "./product.router";

router.use("/products", productRoutes);

export default router;
