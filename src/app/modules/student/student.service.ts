import StudentModel from "./student.model";

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
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
