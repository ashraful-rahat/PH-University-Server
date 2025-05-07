import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import router from "./app/Routes/route";
import globalErrorHandler from "./Middleware/globalErrorHandler";
import notFound from "./Middleware/notFound";
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// student route
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Hello from Express + TypeScript!");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
