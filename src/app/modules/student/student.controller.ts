import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../utlis/sendResponse";
import { StudentServices } from "./student.service";

// all student get route
const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Students found successfully", // Corrected message
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get single student route
const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Student found successfully", // Corrected message
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
};
