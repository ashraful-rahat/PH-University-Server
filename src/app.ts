import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { StudentRoutes } from "./app/modules/student/student.Routes";
import { userRoutes } from "./app/modules/student/user/user.route";
import globalErrorHandler from "./Middleware/globalErrorHandler";
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// student route
app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Express + TypeScript!");
});

app.use(globalErrorHandler);

export default app;
