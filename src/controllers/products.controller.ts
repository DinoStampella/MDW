import { NextFunction, Request, Response } from "express";
import { Category, Product } from "../models";

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      message: "Products retrieved successfully",
      error: false,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        error: true,
        data: undefined,
      });
    }
    return res.status(200).json({
      message: "Product retrieved successfully",
      error: false,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export const getProductsByCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.findById(req.params.id).populate(
      "products"
    );
    if (!category) {
      return res.status(404).json({
        message: "Category not found",
        error: true,
        data: undefined,
      });
    }
    return res.status(200).json({
      message: "Products retrieved successfully",
      error: false,
      data: category.products,
    });
  } catch (error) {
    next(error);
  }
};
