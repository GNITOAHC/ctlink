"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AuthService } from "@/services";
import { otpSchema } from "@/types/Login";
import type { OTPSchema, LoginSchema } from "@/types/Login";

type OTPFormProps = {
  userData: LoginSchema;
};

const OTPForm = ({ userData }: OTPFormProps) => {
  const router = useRouter();

  const [error, setError] = useState("");

  const form = useForm<OTPSchema>({
    resolver: zodResolver(otpSchema),
  });

  const onSubmit = async (values: OTPSchema) => {
    const res = (await AuthService.verifyLogin({
      ...userData,
      ...values,
    })) as unknown as Response;

    if (res.ok) {
      setError("");
      // const parsedRes = await res.json();
      // console.log(parsedRes);
      router.push("/profile");
    } else {
      setError(await res.text());
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-2">
          <Button type="submit" className="w-full">
            Submit
          </Button>
          {error && <p className="text-center text-destructive">{error}</p>}
        </div>
      </form>
    </Form>
  );
};

export default OTPForm;
