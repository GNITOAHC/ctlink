import { z } from "zod";

export const shortenUrlSchema = z.object({
  source: z.string().url(),
  customPath: z.string().optional(),
  expireAfter: z.number().optional(),
});

export type ShortenUrlSchema = z.infer<typeof shortenUrlSchema>;
