import { Router } from "express";
import {
  getCategory,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers";
import {
  createCategoryValidation,
  updateCategoryValidation,
  deleteCategoryValidation,
} from "../validations";

const router = Router();

router.get("/", getCategories);

router.get("/:id", getCategory);

router.post("/", createCategoryValidation, createCategory);

router.patch("/:id", updateCategoryValidation, updateCategory);

router.delete("/:id", deleteCategoryValidation, deleteCategory);

export default router;
