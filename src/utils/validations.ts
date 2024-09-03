import { Request, Response } from 'express';
import { validationResult } from 'express-validator';


export const validateResult = (req: Request, res: Response, next: () => void) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessage = errors.array()[0].msg;
    const errorResponse = {
      message: errorMessage,
      error: true,
    };
    return res.status(404).json(errorResponse);
  }
  next();
};