import { NextFunction, Request, Response } from "express";
import { User } from "../models";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, lastName, email, isAdmin, birthdate } = req.body;
  try {
    const newUser = await User.create({ name, lastName, email, isAdmin, birthdate });
    return res.status(201).json({
      message: "User created successfully",
      data: newUser,
      error: false,
    });
  } catch (error) {
    next(error)
  }
};

export const getUsers = (req: Request, res: Response) => {
  res.json({ message: "", data: {} });
};

export const getUser = (req: Request, res: Response) => {
  res.json({ message: "", data: {} });
};

export const updateUser = (req: Request, res: Response) => {
  res.json({ message: "", data: {} });
};

export const deleteUser = (req: Request, res: Response) => {
  res.json({ message: "", data: {} });
};
