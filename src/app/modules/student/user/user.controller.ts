import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../../utlis/sendResponse";
import { userServices } from "./user.services";

const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, student: studentData } = req.body;

    const result = await userServices.createStudentIntoDB(
      password,
      studentData
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Operation was successful",
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createUserController,
};
