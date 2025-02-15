import express from "express";
import { UserController } from "@/controllers/userController";
import { authMiddleware } from "@/middlewares/authMiddleware";
import { UserRepository } from "@/repositories/userCollection";

const router = express.Router();
const userController = new UserController(new UserRepository());

router.get("/users/:id", authMiddleware, userController.fetchUserData.bind(userController));
router.put("/users/:id", authMiddleware, userController.updateUserData.bind(userController));

export default router;