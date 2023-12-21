import { z } from "zod";

const registerInputSchema = z
  .object({
    email: z.string().min(1, "Email is required").email(),
    password: z
      .string()
      .min(5, "Password should be minimum 5 characters")
      .max(15, "Password should not exceed 15 characters"),
    confirmPassword: z
      .string()
      .min(5, "Password should be minimum 5 characters")
      .max(15, "Password should not exceed 15 characters"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterInput = z.infer<typeof registerInputSchema>;

export { registerInputSchema };

export type { RegisterInput };
