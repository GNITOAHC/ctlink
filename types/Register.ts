// register page

import { z } from "zod";

// used in register/_components/RegisterForm.tsx
export const registerSchema = z
  .object({
    username: z.string().min(2).max(50),
    mail: z.string().email(),
  })
  .refine((data) => data.username[0] !== "_", {
    message: "username should not start with '_'",
    path: ["username"],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;

// used in register/_components/OTPForm.tsx
export const otpSchema = z.object({
  otp: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export type OTPSchema = z.infer<typeof otpSchema>;
