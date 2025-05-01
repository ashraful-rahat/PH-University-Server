import { model, Schema } from "mongoose"; // Importing Schema and Types from Mongoose
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUsername,
} from "./student.interface"; // Import your types

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

// Define the student schema
const studentSchema = new Schema<TStudent>({
  id: { type: String, required: true, unique: true },
  user: {
    type: Schema.Types.ObjectId, // Use Schema.Types.ObjectId
    required: [true, "User Id must be provided"],
    ref: "User", // Reference the User model
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

// Create and export the Student Model
const StudentModel = model<TStudent>("Student", studentSchema);

export default StudentModel;
