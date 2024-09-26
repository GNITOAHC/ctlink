import { z } from "zod";

export const loginSchema = z.object({
  mail: z.string().email(),
});

export const otpSchema = z.object({
  otp: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type OTPSchema = z.infer<typeof otpSchema>;
