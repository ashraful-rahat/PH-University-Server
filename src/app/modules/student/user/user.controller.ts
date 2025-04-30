import { Request, Response } from "express";
import { userServices } from "./user.services";

const createUserController = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;

    const result = await userServices.createStudentIntoDB(
      password,
      studentData
    );

    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result, // now includes populated user info
    });
  } catch (error) {
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
