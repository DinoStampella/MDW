import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const categoryBodyValidationSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().max(500).optional(),
  products: Joi.array().items(Joi.string().hex().length(24)).optional(),
});

export const createCategoryValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = categoryBodyValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      error: true,
    });
  }
  next();
};

export const updateCategoryValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = categoryBodyValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      error: true,
    });
  }
  next();
};

const categoryParamValidationSchema = Joi.object({
  id: Joi.string().hex().length(24).required(),
});

export const deleteCategoryValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = categoryParamValidationSchema.validate(req.params);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      error: true,
    });
  }
  next();
};
