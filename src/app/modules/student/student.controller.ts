import { StudentServices } from "./student.service";

import { Request, Response } from "express";
import { studentValidationSchema } from "./student.validation";

//student post route
const createStudentController = async (req: Request, res: Response) => {
  try {
    // creating schema validation with zod

    const { student: studentData } = req.body;

    const zodParsedData = studentValidationSchema.parse(studentData);

    // Assuming StudentServices is properly set up to save the student
    const result = await StudentServices.createStudentIntoDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//all student get route
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: "Students  find  successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// get single student route \
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: "Students  find  successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudentController,
  getAllStudents,
  getSingleStudent,
};
