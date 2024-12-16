import { describe, it, expect } from "vitest";
import { faker } from "@faker-js/faker";
import { truncateString } from "./truncate";

describe("truncateString", () => {
  it("should return original string if length is less than max", () => {
    const str = faker.string.alpha(5);
    expect(truncateString(str, 10)).toBe(str);
  });

  it("should truncate string and add suffix if length exceeds max", () => {
    const str = faker.string.alpha(20);
    const result = truncateString(str, 10);
    expect(result.length).toBe(13); // 10 chars + 3 dots
    expect(result.endsWith("...")).toBe(true);
    expect(result.slice(0, 10)).toBe(str.slice(0, 10));
  });

  it("should use custom suffix if provided", () => {
    const str = faker.string.alpha(20);
    const suffix = "***";
    const result = truncateString(str, 10, suffix);
    expect(result.endsWith(suffix)).toBe(true);
    expect(result.slice(0, 10)).toBe(str.slice(0, 10));
  });
});
