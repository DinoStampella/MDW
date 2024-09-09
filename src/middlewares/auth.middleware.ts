import { NextFunction, Request, Response } from "express";
import firebaseApp from "../config/firebase";
import { User } from "../models";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      next("Provide a Token");
      return;
    }

    const BEARER_STRING = "Bearer ";

    if (!authorization.startsWith(BEARER_STRING)) {
      next("Invalid Token format");
      return;
    }

    const token = authorization.split(" ")[1];

    const decodedToken = await firebaseApp.auth().verifyIdToken(token);

    const user = await User.findOne({firebaseUid: decodedToken.uid});

    if (!user) return next("User not found");
    res.locals.userId = user._id;
    next();
  } catch (error: any) {
    if (error.errorInfo.code === "auth/argument-error") {
      next("Provide a Token");
    }
    if (error.errorInfo.code === "auth/id-token-expired") {
      next("Firebase ID token has expired");
    }
    next(error.message);
  }
};

export { authMiddleware };
