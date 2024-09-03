import { NextFunction, Request, Response } from "express";
import { Category } from "../models";

export const getCategories = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({
      message: "Categories retrieved successfully",
      data: categories,
      error: false,
    });
  } catch (error) {
    next(error);
  }
};

export const getCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res
        .status(404)
        .json({ message: "Category not found", error: true });
    }
    return res.status(200).json({
      message: "Category retrieved successfully",
      data: category,
      error: false,
    });
  } catch (error) {
    next(error);
  }
};

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.create(req.body);
    return res.status(201).json({
      message: "Category created successfully",
      data: category,
      error: false,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category) {
      return res
        .status(404)
        .json({ message: "Category not found", error: true });
    }
    return res.status(200).json({
      message: "Category updated successfully",
      data: category,
      error: false,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res
        .status(404)
        .json({ message: "Category not found", error: true });
    }
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};
