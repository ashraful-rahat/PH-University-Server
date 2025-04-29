import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create-student", userController.createUserController);

export const userRoutes = router;
