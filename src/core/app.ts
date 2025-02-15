import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "@/routes";
import { loggerMiddleware } from "@/middlewares";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(loggerMiddleware);
app.use("/services", routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
