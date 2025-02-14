import { db } from "@/config/firebaseConfig";
import { UserEntities } from "@/entities/userEntities";

const USERS_COLLECTION = "users";

export const getUser = async (userId: string): Promise<UserEntities | null> => {
  const userDoc = await db.collection(USERS_COLLECTION).doc(userId).get();
  return userDoc.exists ? { id: userDoc.id, ...userDoc.data() } as UserEntities : null;
};

export const updateUser = async (userId: string, userData: Partial<UserEntities>): Promise<UserEntities> => {
  await db.collection(USERS_COLLECTION).doc(userId).update(userData);
  return {
    id: userId,
    name: userData.name ?? '',
    email: userData.email ?? '',
    age: userData.age ?? 0,
  };
};