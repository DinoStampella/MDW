import { body, checkExact } from "express-validator";
import { validateResult } from "../utils/validations";
import Joi, { string } from "joi";
import { NextFunction, Request, Response } from "express";

const getProductValidationSchema = Joi.object({
    id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required().messages({
        'string.pattern.base': 'El ID debe ser un ObjectId válido de 24 caracteres',
        'string.empty': 'El ID es obligatorio',
      }),
})

export const getProductValidation = (req: Request, res: Response, next: NextFunction)=>{
    const { error } = getProductValidationSchema.validate(req.params);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    
    next();
}

