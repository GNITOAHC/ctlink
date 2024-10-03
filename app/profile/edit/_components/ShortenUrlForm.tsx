"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { shortenUrlSchema, type ShortenUrlSchema } from "@/types/ShortenUrl";

import { ShortenUrlService } from "@/services";

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
import { useToast } from "@/hooks/use-toast";

const ShortenUrlForm = () => {
  const { toast } = useToast();

  const form = useForm<ShortenUrlSchema>({
    resolver: zodResolver(shortenUrlSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
    setError,
  } = form;

  const onSubmit = async (values: ShortenUrlSchema) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const res = (await ShortenUrlService.shortenUrl(values)) as Response;
    const text = await res.text();
    if (res.ok) {
      toast({
        title: "URL Shortened Successfully",
        description: text,
      });
    } else {
      setError("root", {
        message: text,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={control}
          name="source"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel>Source URL</FormLabel>
              <FormControl>
                <Input
                  type="url"
                  placeholder="https://example.com"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is the URL you want to shorten.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="customPath"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel>Custom Path</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Custom Path (optional)"
                  {...field}
                />
              </FormControl>
              <FormDescription>This is your custom path.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="expireAfter"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel>Expire After</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Expire After (optional)"
                  {...field}
                  onChange={(e) => {
                    field.onChange(Number(e.target.value));
                  }}
                  min={-1}
                />
              </FormControl>
              <FormDescription>
                Default to 180 days, set to -1 for no expiration.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
        {errors.root && <FormMessage>{errors.root.message}</FormMessage>}
      </form>
    </Form>
  );
};

export default ShortenUrlForm;
