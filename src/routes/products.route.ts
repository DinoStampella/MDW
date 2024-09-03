import { Router } from "express";
import { getProduct, getProducts, getProductsByCategory } from "../controllers";
import { getProductValidation } from "../validations";


const router = Router();

router.get("/", getProducts)
router.get("/:id", getProductValidation,getProduct)
router.get("/category/:id", getProductsByCategory)

export default router;
