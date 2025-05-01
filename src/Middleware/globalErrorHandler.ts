import { ErrorRequestHandler } from "express";

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  const statusCode = error?.statusCode || 500;
  const message = error?.message || "Something went wrong";

  res.status(statusCode).json({
    success: false,
    message,
    error,
    stack: error.stack,
  });
};

export default globalErrorHandler;
