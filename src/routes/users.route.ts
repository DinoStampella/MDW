import { Router } from "express";
<<<<<<< HEAD
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/index";
=======
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers";

>>>>>>> clase2

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
