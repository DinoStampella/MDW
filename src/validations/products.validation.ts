import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const productBodyValidationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
  amount: Joi.number().required(),
  price: Joi.number().required(),
  isActive: Joi.boolean().optional(),
  image: Joi.string().optional(),
  ownerId: Joi.string().hex().length(24).required(),
});

const productParamValidationSchema = Joi.object({
  id: Joi.string().hex().length(24).required(),
});

export const createProductValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = productBodyValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      error: true,
    });
  }
  next();
};

export const updateProductValidation = createProductValidation;

export const deleteProductValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = productParamValidationSchema.validate(req.params);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      error: true,
    });
  }
  next();
};
