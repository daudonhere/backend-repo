import { z } from "zod";

export const updateUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  age: z.number().int().positive().optional()
});