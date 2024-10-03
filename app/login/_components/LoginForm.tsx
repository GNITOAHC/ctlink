"use client";

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
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const {
    handleSubmit,
    getValues,
    control,
    formState: { isSubmitting, isSubmitSuccessful, errors },
    setError,
  } = form;

  const onSubmit = async (values: LoginSchema) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    const { mail } = values;

    const res = (await AuthService.login({ mail })) as unknown as Response;

    if (!res.ok) {
      setError("root", {
        message: await res.text(),
      });
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
          {errors.root && (
            <span className="text-destructive">{errors.root.message}</span>
          )}
        </form>
      </Form>

      {isSubmitSuccessful && <OTPForm userData={getValues()} />}
    </div>
  );
}
