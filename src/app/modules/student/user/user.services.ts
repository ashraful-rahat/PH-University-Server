import { Types } from "mongoose";
import config from "../../../config";
import { TStudent } from "../student.interface";
import StudentModel from "../student.model";
import { TUser } from "./user.interface";
import User from "./user.model";

const generateStudentId = () => `STU${Date.now()}`;

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const generatedId = generateStudentId();

  // Create user data
  const userData: Partial<TUser> = {
    password: password || (config.default_password as string),
    role: "student",
    id: generatedId,
    needsPasswordChange: false,
    status: "in-progress",
    isDeleted: false,
  };

  const newUser = await User.create(userData);

  if (newUser && newUser._id) {
    studentData.id = generatedId;
    studentData.user = newUser._id as Types.ObjectId;

    // Create the new student
    const newStudent = await StudentModel.create(studentData);

    const populatedStudent = await StudentModel.findById(
      newStudent._id
    ).populate("user");

    return populatedStudent;
  }

  throw new Error("Failed to create user");
};

export const userServices = {
  createStudentIntoDB,
};
