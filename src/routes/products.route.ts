import { Router } from "express";
import { getProduct, getProducts, getProductsByCategory } from "../controllers";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", getProducts);
router.get("/:id", authMiddleware, getProduct);
router.get("/category/:id", getProductsByCategory);

export default router;
