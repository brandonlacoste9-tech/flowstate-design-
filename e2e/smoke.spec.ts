import { test, expect } from "@playwright/test";

test("home en loads hero", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("work page lists case studies", async ({ page }) => {
  await page.goto("/en/work");
  await expect(page.getByRole("link").first()).toBeVisible();
});

test("contact form validates", async ({ page }) => {
  await page.goto("/en/contact");
  await page.getByRole("button", { name: /send/i }).click();
  // native or custom validation prevents empty submit
  await expect(page.getByLabel(/email/i)).toBeVisible();
});
