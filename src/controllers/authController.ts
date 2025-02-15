import { Request, Response } from "express";
import { admin } from "@/config/firebaseConfig";

interface AuthRequest extends Request {
  user?: admin.auth.DecodedIdToken;
}

export const verifyToken = async (req: AuthRequest, res: Response) => {
  const token = req.headers.authorization?.split("Bearer ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    return res.json({ success: true, user: decodedToken });
  } catch (error) {
    console.error("Invalid token:", error);
    return res.status(403).json({ error: "Unauthorized: Invalid token" });
  }
};
