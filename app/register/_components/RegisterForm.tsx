"use client";

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
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const {
    control,
    handleSubmit,
    getValues,
    formState: { isSubmitting, isSubmitSuccessful, errors },
    setError,
  } = form;

  const onSubmit = async (data: RegisterSchema) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(data);

    const { mail } = data;

    const res = (await AuthService.register({ mail })) as unknown as Response;
    console.log(res);

    if (!res.ok) {
      setError("root", {
        message: await res.text(),
      });
    }
  };

  return (
    <div className="space-y-4">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={control}
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
            control={control}
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
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending OTP" : "Send OTP"}
            </Button>
            {errors.root && (
              <span className="text-destructive">{errors.root.message}</span>
            )}
          </div>
        </form>
      </Form>

      {isSubmitSuccessful && <OTPForm userData={getValues()} />}
    </div>
  );
};

export default RegisterForm;
