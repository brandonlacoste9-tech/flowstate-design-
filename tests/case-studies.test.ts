import { describe, it, expect } from "vitest";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { packages } from "@/content/packages";

describe("caseStudies", () => {
  it("has at least 3 studies with unique slugs", () => {
    expect(caseStudies.length).toBeGreaterThanOrEqual(3);
    const slugs = caseStudies.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("getCaseStudy returns undefined for unknown slug", () => {
    expect(getCaseStudy("not-a-real-slug")).toBeUndefined();
  });

  it("every study has en and fr title/challenge/approach/outcome", () => {
    for (const c of caseStudies) {
      for (const locale of ["en", "fr"] as const) {
        expect(c.title[locale].length).toBeGreaterThan(0);
        expect(c.challenge[locale].length).toBeGreaterThan(0);
        expect(c.approach[locale].length).toBeGreaterThan(0);
        expect(c.outcome[locale].length).toBeGreaterThan(0);
      }
    }
  });

  it("every study has a portfolio image path", () => {
    for (const c of caseStudies) {
      expect(c.image).toMatch(/^\/work\/.+\.jpe?g$/i);
    }
  });
});


describe("packages", () => {
  it("defines exactly three productized tiers", () => {
    expect(packages).toHaveLength(3);
    expect(packages.map((p) => p.id)).toEqual(["rebuild", "new", "custom"]);
  });
});
