import { Request, Response } from "express";
import { getUser, updateUser } from "@/repositories/userCollection";
import { handleError } from "@/utils/errorHandler";

export const fetchUserData = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await getUser(req.params.id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    handleError(res, error, "Failed to fetch user");
  }
};

export const updateUserData = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedUser = await updateUser(req.params.id, req.body);
    res.json(updatedUser);
  } catch (error) {
    handleError(res, error, "Failed to update user");
  }
};
