import express from "express";
import { StudentControllers } from "./student.controller";

const router = express.Router();

//all routing
router.get("/", StudentControllers.getAllStudents);

router.get("/:studentId", StudentControllers.getSingleStudent);

export const StudentRoutes = router;
