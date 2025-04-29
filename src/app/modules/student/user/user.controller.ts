import { Request, Response } from "express";
import { userServices } from "./user.services";

const createUserController = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;

    // Call the service to create student
    const result = await userServices.createStudentIntoDB(
      password,
      studentData
    );

    // Respond with success
    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    // Log the error and send response with the error details
    console.error("Error in createUserController:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error: (error as Error).message || "An unknown error occurred",
    });
  }
};

export const userController = {
  createUserController,
};
