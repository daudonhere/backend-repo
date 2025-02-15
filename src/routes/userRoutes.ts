import express from "express";
import { UserController } from "@/controllers/userController";
import { UserService } from "@/services/userService";
import { UserRepository } from "@/repositories/userRepository";
import { authMiddleware } from "@/middlewares/authMiddleware";

const router = express.Router();
const userRepo = new UserRepository();
const userService = new UserService(userRepo);
const userController = new UserController(userService);

router.get("/users/:id", authMiddleware, userController.fetchUserData.bind(userController));
router.put("/users/:id", authMiddleware, userController.updateUserData.bind(userController));

export default router;