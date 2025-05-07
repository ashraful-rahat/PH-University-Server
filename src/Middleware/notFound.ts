import { NextFunction, Request, Response } from "express";

// Not Found Middleware
const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    message: "Route not found",
    path: req.originalUrl,
  });
};

export default notFound;
