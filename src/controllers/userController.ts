import { Request, Response } from "express";
import { UserService } from "@/services/userService";
import { handleError } from "@/utils/errorHandler";

export class UserController {
  constructor(private readonly userService: UserService) {}
  async fetchUserData(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const user = await this.userService.getUser(userId);
      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }
      res.json(user);
    } catch (error) {
      handleError(res, error, "Failed to fetch user");
    }
  }
  async updateUserData(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const userData = req.body;
      const updatedUser = await this.userService.updateUser(userId, userData);
      res.json(updatedUser);
    } catch (error) {
      handleError(res, error, "Failed to update user");
    }
  }
}