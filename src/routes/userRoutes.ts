import express from "express";
import { createUser, fetchAllUsers, fetchUserData, updateUserData } from "@/controllers";
import { authMiddleware } from "@/middlewares/authMiddleware";

const router = express.Router();

router.post("/", authMiddleware, createUser);
router.get("/", authMiddleware, fetchAllUsers);
router.get("/:id", authMiddleware, fetchUserData);
router.put("/:id", authMiddleware, updateUserData);

export default router;
