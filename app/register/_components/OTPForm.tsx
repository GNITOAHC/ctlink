"use client";

import React, { useState } from "react";
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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { AuthService } from "@/services";

import { otpSchema } from "@/types/Register";
import type { OTPSchema, RegisterSchema } from "@/types/Register";

type OTPFormProps = {
  userData: RegisterSchema;
};

const OTPForm = ({ userData }: OTPFormProps) => {
  const router = useRouter();

  const [error, setError] = useState("");

  const form = useForm<OTPSchema>({
    resolver: zodResolver(otpSchema),
  });

  const onSubmit = async (data: OTPSchema) => {
    console.log(data);

    const res = (await AuthService.verify({
      ...userData,
      ...data,
    })) as unknown as Response;

    if (res.ok) {
      setError("");
      router.push("/login");
    } else {
      setError(await res.text());
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
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
                Please enter the one-time password sent to your phone.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-x-4">
          <Button type="submit">Submit</Button>
          {error && <span className="text-destructive">{error}</span>}
        </div>
      </form>
    </Form>
  );
};

export default OTPForm;
