import { db } from "@/config/firebaseConfig";
import { UserEntities } from "@/entities/userEntities";

const USERS_COLLECTION = "users";

export class UserRepository {
  async getUser(userId: string): Promise<UserEntities | null> {
    const userDoc = await db.collection(USERS_COLLECTION).doc(userId).get();
    return userDoc.exists ? { id: userDoc.id, ...userDoc.data() } as UserEntities : null;
  }

  async updateUser(userId: string, userData: Partial<UserEntities>): Promise<UserEntities> {
    await db.collection(USERS_COLLECTION).doc(userId).update(userData);
    const updatedDoc = await db.collection(USERS_COLLECTION).doc(userId).get();
    return { id: updatedDoc.id, ...updatedDoc.data() } as UserEntities;
  }
}