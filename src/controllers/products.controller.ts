import { NextFunction, Request, Response } from "express";
import { Category, Product } from "../models";
import { StatusCodes } from "http-status-codes";

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await Product.find();
    if (!products.length) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "Products not found",
        error: false,
        data: undefined,
      });
    }
    return res.status(StatusCodes.OK).json({
      message: "Products retrieved successfully",
      error: false,
      data: products,
    });
  } catch (error) {
    next(error)
  }
};

export const getProduct = async (req: Request, res: Response, next: NextFunction ) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "Product not found",
        error: false,
        data: undefined,
      });
    }
    return res.status(StatusCodes.OK).json({
      message: "Product retrieved successfully",
      error: false,
      data: product,
    });
  } catch (error) {
    next(error)
  }
};

export const getProductByCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const category = await Category.findById(req.params.id).populate("products");
    if (!category) throw new Error("Category does not exist")
    if (!category?.products.length) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "Product not found",
        error: false,
        data: undefined,
      });
    }
    return res.status(StatusCodes.OK).json({
      message: "Product retrieved successfully",
      error: false,
      data: category.products,
    });
  } catch (error) {
    next(error)
  }
};