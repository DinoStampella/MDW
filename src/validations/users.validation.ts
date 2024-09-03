import { body, checkExact } from "express-validator";
import { validateResult } from "../utils/validations";
import Joi from "joi";
import { NextFunction, Request, Response } from "express";

const createUserValidationSchema = Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    isAdmin: Joi.boolean().default(false),
    birthdate: Joi.date().required(),
})

export const createUserValidation = (req: Request, res: Response, next: NextFunction)=>{
    const { error } = createUserValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    
    next();
}