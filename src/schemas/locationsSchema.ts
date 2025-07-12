import { z } from "zod/v4";

const coordinateSchema = z.object({
  latitude: z
    .number()
    .refine((val) => typeof val === "number" && !isNaN(val), {
      message: "Latitude must be a valid number",
    })
    .refine((val) => val >= -90 && val <= 90, {
      message: "Invalid latitude value.",
    }),

  longitude: z
    .number()
    .refine((val) => typeof val === "number" && !isNaN(val), {
      message: "Longitude must be a valid number",
    })
    .refine((val) => val >= -180 && val <= 180, {
      message: "Invalid longitude value.",
    }),
});

export const pickDropSchema = z.object({
  pickup: coordinateSchema,
  drop: coordinateSchema,
});
