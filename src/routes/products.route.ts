import { Router } from "express";
import {
  getProduct,
  getProducts,
  getProductsByCategory,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers";
import {
  createProductValidation,
  deleteProductValidation,
  updateProductValidation,
} from "../validations";

const router = Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.get("/category/:id", getProductsByCategory);

router.post("/", createProductValidation, createProduct);

router.patch("/:id", updateProductValidation, updateProduct);

router.delete("/:id", deleteProductValidation, deleteProduct);

export default router;
