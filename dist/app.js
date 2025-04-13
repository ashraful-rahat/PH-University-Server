"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const student_Routes_1 = require("./app/modules/student/student.Routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// student route
app.use("/api/v1/students", student_Routes_1.StudentRoutes);
app.get("/", (req, res) => {
    res.send("Hello from Express + TypeScript!");
});
exports.default = app;
