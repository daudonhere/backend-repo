import { Request, Response } from "express";
import { UserRepository } from "@/repositories/userRepository";
import { handleError } from "@/utils/errorHandler";

const userRepo = new UserRepository();

export async function fetchUserData(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.params.id;
    const user = await userRepo.getUser(userId);
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    handleError(res, error, "Failed to fetch user");
  }
}

export async function fetchAllUsers(req: Request, res: Response): Promise<void> {
  try {
    const users = await userRepo.getAllUsers();
    res.json(users);
  } catch (error) {
    handleError(res, error, "Failed to fetch all users");
  }
}

export async function createUser(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, age } = req.body;

    if (!name || !email) {
      res.status(400).json({ error: "Name and email are required" });
      return;
    }

    const newUser = await userRepo.createUser({ name, email, age });
    res.status(201).json(newUser);
  } catch (error) {
    handleError(res, error, "Failed to create user");
  }
}

export async function updateUserData(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const updatedUser = await userRepo.updateUser(userId, userData);
    res.json(updatedUser);
  } catch (error) {
    handleError(res, error, "Failed to update user");
  }
}
