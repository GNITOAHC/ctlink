"use client";

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

  const form = useForm<OTPSchema>({
    resolver: zodResolver(otpSchema),
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    setError,
  } = form;

  const onSubmit = async (data: OTPSchema) => {
    console.log(data);

    const res = (await AuthService.verifyRegister({
      ...userData,
      ...data,
    })) as unknown as Response;

    if (res.ok) {
      router.push("/login");
    } else {
      setError("root", {
        message: await res.text(),
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={control}
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
        <div className="space-y-2">
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Wait ..." : "Register"}
          </Button>
          {errors.root && (
            <p className="text-center text-destructive">
              {errors.root.message}
            </p>
          )}
        </div>
      </form>
    </Form>
  );
};

export default OTPForm;
