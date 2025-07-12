import { z } from "zod/v4";
import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";

export const validate =
  <T extends z.ZodSchema>(schema: T) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return next(createHttpError(400, result.error));
    }

    // ✅ Safe assignment with proper type
    req.body = result.data as z.infer<typeof schema>;

    next();
  };
