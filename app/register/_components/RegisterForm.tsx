"use client";

import React, { useState } from "react";

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
import { Input } from "@/components/ui/input";

import OTPForm from "./OTPForm";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { AuthService } from "@/services";

import { registerSchema, type RegisterSchema } from "@/types/Register";

const RegisterForm = () => {
  const [showOTP, setShowOTP] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const {
    getValues,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: RegisterSchema) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(data);

    const { mail } = data;

    const res = (await AuthService.register({ mail })) as unknown as Response;
    console.log(res);

    if (res.ok) {
      setShowOTP(true);
      setError("");
    } else {
      setError(await res.text());
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormDescription>This is your email.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-x-4">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting ..." : "Submit"}
            </Button>
            {error && <span className="text-destructive">{error}</span>}
          </div>
        </form>
      </Form>

      {showOTP && !error && <OTPForm userData={getValues()} />}
    </>
  );
};

export default RegisterForm;
