"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { AuthService } from "@/services";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, type LoginSchema } from "@/types/Login";

import OTPForm from "./OTPForm";

export default function LoginForm() {
  const [error, setError] = useState("");

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const {
    handleSubmit,
    getValues,
    control,
    formState: { isSubmitting, isSubmitSuccessful },
  } = form;

  const onSubmit = async (values: LoginSchema) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    const { mail } = values;

    const res = (await AuthService.login({ mail })) as unknown as Response;

    if (res.ok) {
      setError("");
    } else {
      setError(await res.text());
    }
  };

  return (
    <div className="space-y-4">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <FormField
            control={control}
            name="mail"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="m@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending OTP" : "Send OTP"}
          </Button>
          {error && <span className="text-destructive">{error}</span>}
        </form>
      </Form>

      {isSubmitSuccessful && !error && <OTPForm userData={getValues()} />}
    </div>
  );
}
