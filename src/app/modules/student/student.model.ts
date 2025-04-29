import { model, Schema } from "mongoose";
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUsername,
} from "./student.interface";

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const usernameSchema = new Schema<TUsername>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const studentSchema = new Schema<TStudent>({
  id: { type: String, required: true, unique: true },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "User Id must needed"],
    unique: true,
    ref: "User",
  },
  name: { type: usernameSchema, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
  dateOfBirth: { type: String },
  email: { type: String, required: true, unique: true },
  avatar: { type: String },
  contactNo: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  BloodType: { type: String, enum: ["A", "B", "AB", "O"] },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: { type: guardianSchema, required: true },
  localGuardian: { type: localGuardianSchema, required: true },
  profileImg: { type: String },
});

const StudentModel = model<TStudent>("Student", studentSchema);

export default StudentModel;

//use trim
// message :{value} is not correct format
// string should be 20 character  then a show a default message
// use validate function then add all name string 1st word uppercase
