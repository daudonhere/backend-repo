import { Request, Response, NextFunction } from "express";
import { admin } from "@/config/firebaseConfig";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.headers.authorization?.split("Bearer ")[1];

  if (!token) {
    res.status(401).json({ error: "Unauthorized: No token provided" });
    return;
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    (req as Request & { user: admin.auth.DecodedIdToken }).user = decodedToken;
    next();
  } catch (error) {
    console.error("Invalid token:", error);
    res.status(403).json({ error: "Unauthorized: Invalid token" });
  }
};