import { describe, it, expect } from "vitest";
import { contactSchema } from "@/lib/contact-schema";

describe("contactSchema", () => {
  it("accepts a valid payload", () => {
    const parsed = contactSchema.safeParse({
      name: "Alex",
      email: "alex@example.com",
      projectType: "rebuild",
      budget: "3to6",
      message: "We need a rebuild of our restaurant site.",
    });
    expect(parsed.success).toBe(true);
  });

  it("rejects invalid email and short message", () => {
    const parsed = contactSchema.safeParse({
      name: "A",
      email: "not-an-email",
      projectType: "new",
      budget: "tbd",
      message: "hi",
    });
    expect(parsed.success).toBe(false);
  });

  it("rejects filled honeypot company field", () => {
    const parsed = contactSchema.safeParse({
      name: "Alex",
      email: "alex@example.com",
      projectType: "rebuild",
      budget: "3to6",
      message: "We need a rebuild of our restaurant site.",
      company: "spam-bot-inc",
    });
    expect(parsed.success).toBe(false);
  });
});
