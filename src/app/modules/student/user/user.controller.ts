import { Request, Response } from "express";
import catchAsync from "../../../../utils/catchAsync";
import sendResponse from "../../../../utils/sendResponse";
import { userServices } from "./user.services";

const createUserController = catchAsync(async (req: Request, res: Response) => {
  const { password, student: studentData } = req.body;

  const result = await userServices.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Operation was successful",
    data: result,
  });
});

export const userController = {
  createUserController,
};
