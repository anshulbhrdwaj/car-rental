/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
import logger from "../config/logger";

export default function ApiErrorHandler(
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  logger.error("🚨", {
    message: err.message,
    name: err.name,
    // stack: err.stack,
    statusCode: err.statusCode,
    path: req.originalUrl,
    method: req.method,
    ip: req.ip,
  });

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    errors: [
      {
        type: err.name,
        message: err.message,
        path: "",
        location: "",
      },
    ],
  });
}
