import { TStudent } from "./student.interface";
import StudentModel from "./student.model";

// student post route
const createStudentIntoDB = async (student: TStudent) => {
  const result = await StudentModel.create(student);
  return result;
};
// student get route
const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

//get single student id
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id: id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
