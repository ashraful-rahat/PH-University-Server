import { z } from "zod";

const userValidationSchema = z.object({
  id: z.string(),
  password: z
    .string({
      invalid_type_error: "Password must be String",
    })
    .max(20, { message: "Password must be at most 20 characters long" }),
  needsPasswordChange: z.boolean().optional(),
  status: z.enum(["in-progress", "blocked"]).optional(),
  role: z.enum(["admin", "student", "faculty"], {
    required_error: "Role is required",
  }),
  isDeleted: z.boolean().optional(),
});

export const userValidation = {
  userValidationSchema,
};
