import { Request, Response } from "express";
import { UserRepository } from "@/repositories/userCollection";
import { handleError } from "@/utils/errorHandler";
import { UserEntities } from "@/entities/userEntities";

export class UserController {
  constructor(private readonly userRepo: UserRepository) {}

  async fetchUserData(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const user = await this.userRepo.getUser(userId);
      
      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }
      
      res.json(this.formatUserResponse(user));
    } catch (error) {
      handleError(res, error, "Failed to fetch user");
    }
  }

  async updateUserData(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const userData: Partial<UserEntities> = req.body;
      
      const updatedUser = await this.userRepo.updateUser(userId, userData);
      res.json(this.formatUserResponse(updatedUser));
    } catch (error) {
      handleError(res, error, "Failed to update user");
    }
  }

  private formatUserResponse(user: UserEntities) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      age: user.age
    };
  }
}