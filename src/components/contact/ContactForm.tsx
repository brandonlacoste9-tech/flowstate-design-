"use client";

import { useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const projectTypes = ["rebuild", "new", "both", "other"] as const;
const budgets = ["u3", "3to6", "6to12", "12p", "tbd"] as const;

type FormState = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-[var(--radius)] border border-border bg-surface/60 px-4 py-2.5 text-sm text-text outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-1 focus:ring-accent";

const labelClass = "mb-1.5 block text-sm font-medium text-text";

export function ContactForm() {
  const t = useTranslations("contact");
  const locale = useLocale();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] =
    useState<(typeof projectTypes)[number]>("rebuild");
  const [budget, setBudget] = useState<(typeof budgets)[number]>("tbd");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [state, setState] = useState<FormState>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          projectType,
          budget,
          message,
          locale,
          company,
        }),
      });

      if (!res.ok) {
        setState("error");
        return;
      }

      setState("success");
      setName("");
      setEmail("");
      setProjectType("rebuild");
      setBudget("tbd");
      setMessage("");
      setCompany("");
    } catch {
      setState("error");
    }
  }

  const sending = state === "sending";

  return (
    <form onSubmit={onSubmit} className="relative mt-10 max-w-xl space-y-5" noValidate>
      {/* Honeypot — hidden from humans */}
      <div
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        aria-hidden
      >
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="contact-name" className={labelClass}>
          {t("name")}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          maxLength={100}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={sending}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          {t("email")}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={200}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={sending}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-project-type" className={labelClass}>
          {t("projectType")}
        </label>
        <select
          id="contact-project-type"
          name="projectType"
          required
          value={projectType}
          onChange={(e) =>
            setProjectType(e.target.value as (typeof projectTypes)[number])
          }
          disabled={sending}
          className={cn(fieldClass, "appearance-none")}
        >
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {t(`types.${type}`)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-budget" className={labelClass}>
          {t("budget")}
        </label>
        <select
          id="contact-budget"
          name="budget"
          required
          value={budget}
          onChange={(e) =>
            setBudget(e.target.value as (typeof budgets)[number])
          }
          disabled={sending}
          className={cn(fieldClass, "appearance-none")}
        >
          {budgets.map((b) => (
            <option key={b} value={b}>
              {t(`budgets.${b}`)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          {t("message")}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={sending}
          className={cn(fieldClass, "resize-y")}
        />
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={sending} className="disabled:opacity-60">
          {sending ? t("sending") : t("submit")}
        </Button>

        {state === "success" ? (
          <p className="text-sm text-accent" role="status">
            {t("success")}
          </p>
        ) : null}
        {state === "error" ? (
          <p className="text-sm text-red-300" role="alert">
            {t("error")}
          </p>
        ) : null}
      </div>
    </form>
  );
}
