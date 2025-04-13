"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentControllers = void 0;
const student_service_1 = require("./student.service");
//student post route
const createStudentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Request Body:", req.body); // Check the incoming request body
        const { student: studentData } = req.body;
        // Assuming StudentServices is properly set up to save the student
        const result = yield student_service_1.StudentServices.createStudentIntoDB(studentData);
        res.status(200).json({
            success: true,
            message: "Student is created successfully",
            data: result,
        });
    }
    catch (err) {
        console.error("Error:", err);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
//all student get route
const getAllStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentServices.getAllStudentFromDB();
        res.status(200).json({
            success: true,
            message: "Students  find  successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
// get single student route \
const getSingleStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        const result = yield student_service_1.StudentServices.getSingleStudentFromDB(studentId);
        res.status(200).json({
            success: true,
            message: "Students  find  successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.StudentControllers = {
    createStudentController,
    getAllStudents,
    getSingleStudent,
};
