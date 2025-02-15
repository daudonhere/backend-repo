import { Response } from "express";
import { admin } from "@/config/firebaseConfig";
import { AuthEntities } from "@/entities/authEntities"

export const login = async (req: AuthEntities, res: Response): Promise<void> => {
  try {
    const token = req.headers.authorization?.split("Bearer ")[1];
    if (!token) {
      res.status(401).json({ error: "Unauthorized: No token provided" });
      return;
    }
    const decodedToken = await admin.auth().verifyIdToken(token);
    res.json({ success: true, token, user: decodedToken });
  } catch (error) {
    res.status(403).json({ error: "Unauthorized: Invalid token" });
  }
};
