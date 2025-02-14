import express from "express";
import { fetchUserData, updateUserData } from "@/controllers/userController";
import { authMiddleware } from "@/middlewares/authMiddleware";

const router = express.Router();

router.get("/user/:id", authMiddleware, fetchUserData);
router.put("/user/:id", authMiddleware, updateUserData);

export default router;