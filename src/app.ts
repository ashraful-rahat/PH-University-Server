import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { StudentRoutes } from "./app/modules/student/student.Routes";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// student route
app.use("/api/v1/students", StudentRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Express + TypeScript!");
});

export default app;
