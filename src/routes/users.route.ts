import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers";
import {createUserValidation} from "../validations";
import { param, query } from "express-validator";


const router = Router();

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/",  createUserValidation, createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
