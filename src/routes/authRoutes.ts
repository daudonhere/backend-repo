import { Request, Response, Router } from "express";
import { admin } from "@/config/firebaseConfig";
import { authMiddleware } from "@/middlewares/authMiddleware";

interface AuthRequest extends Request {
  user?: admin.auth.DecodedIdToken;
}

const router = Router();

router.post("/verify-token", authMiddleware, (req: AuthRequest, res: Response) => {
  res.json({ success: true, user: req.user });
});

export default router;
