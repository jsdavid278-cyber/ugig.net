import { describe, expect, it } from "vitest";
import { hasActiveGigFilters } from "./filters";

describe("hasActiveGigFilters", () => {
  it("detects every supported gig filter", () => {
    expect(hasActiveGigFilters({ search: "bug" }, [])).toBe(true);
    expect(hasActiveGigFilters({ category: "Development" }, [])).toBe(true);
    expect(hasActiveGigFilters({ location_type: "remote" }, [])).toBe(true);
    expect(hasActiveGigFilters({ budget_type: "fixed" }, [])).toBe(true);
    expect(hasActiveGigFilters({ sort: "budget_low" }, [])).toBe(true);
    expect(hasActiveGigFilters({}, ["TypeScript"])).toBe(true);
  });

  it("ignores the default sort when no filters are active", () => {
    expect(hasActiveGigFilters({}, [])).toBe(false);
    expect(hasActiveGigFilters({ sort: "newest" }, [])).toBe(false);
  });
});
