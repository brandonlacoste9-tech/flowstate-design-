import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  projectType: z.enum(["rebuild", "new", "both", "other"]),
  budget: z.enum(["u3", "3to6", "6to12", "12p", "tbd"]),
  message: z.string().trim().min(10).max(5000),
  locale: z.enum(["en", "fr"]).optional(),
  /** Honeypot — must stay empty when present */
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
