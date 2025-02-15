import { UserRepository } from "@/repositories/userRepository";
import { UserEntities } from "@/entities/userEntities";

export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  async getUser(userId: string): Promise<UserEntities | null> {
    return await this.userRepo.getUser(userId);
  }

  async updateUser(userId: string, userData: Partial<UserEntities>): Promise<UserEntities> {
    return await this.userRepo.updateUser(userId, userData);
  }
}