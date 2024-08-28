import { Router } from "express";
import { getProduct, getProducts, getProductsByCategory } from "../controllers";


const router = Router();

router.get("/", getProducts)
router.get("/:id", getProduct)
router.get("/category/:id", getProductsByCategory)

export default router;
