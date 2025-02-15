import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "@/routes/userRoutes";
import authRoutes from "@/routes/authRoutes"
import { loggerMiddleware } from "@/middlewares/loggerMiddleware";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(loggerMiddleware);
app.use("/services", userRoutes);
app.use("/services/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
