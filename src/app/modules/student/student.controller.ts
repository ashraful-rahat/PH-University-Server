import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { StudentServices } from "./student.service";

// all student get route
const getAllStudents = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentServices.getAllStudentFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Students retrieved successfully",
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Student retrieved successfully",
    data: result,
  });
});

// const updateStudent = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const { student } = req.body;
//   const result = await StudentServices.updateStudentIntoDB(id, student);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Student is updated successfully',
//     data: result,
//   });
// });

// const deleteStudent = catchAsync(async (req, res) => {
//   const { id } = req.params;
//   const result = await StudentServices.deleteStudentFromDB(id);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Student is deleted successfully',
//     data: result,
//   });
// });

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
};
