import { z } from "zod";

export const usernameValidationSchema = z.object({
  firstName: z.string().max(20, {
    message: "First name cannot be more than 20 characters",
  }),
  middleName: z.string().optional(),
  lastName: z.string().max(20, {
    message: "Last name cannot be more than 20 characters",
  }),
});

export const guardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

export const localGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

export const studentValidationSchema = z.object({
  id: z.string(),
  name: usernameValidationSchema,
  gender: z.enum(["male", "female"]),
  dateOfBirth: z.string().optional(),
  email: z.string().email({ message: "Invalid email format" }),
  avatar: z.string().optional(),
  ContactNo: z.string(),
  emergencyContact: z.string(),
  BloodType: z.enum(["A", "B", "AB", "O"]).optional(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(["active", "offline"]),
});
