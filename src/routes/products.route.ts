import { Router } from "express";
import { getProducts, getProduct, getProductByCategory } from "../controllers";


const router = Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.get("/category/:id", getProductByCategory);

export default router;
