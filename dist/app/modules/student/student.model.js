"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const guardianSchema = new mongoose_1.Schema({
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNo: { type: String, required: true },
});
const localGuardianSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
});
const usernameSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
});
const studentSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: usernameSchema, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    dateOfBirth: { type: String },
    email: { type: String, required: true, unique: true },
    avatar: { type: String },
    ContactNo: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    BloodType: { type: String, enum: ["A", "B", "AB", "O"] },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: { type: guardianSchema, required: true },
    localGuardian: { type: localGuardianSchema, required: true },
    profileImg: { type: String },
    isActive: { type: String, enum: ["active", "offline"], required: true },
});
const StudentModel = (0, mongoose_1.model)("Student", studentSchema);
exports.default = StudentModel;
