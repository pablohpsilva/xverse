import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { faker } from "@faker-js/faker";

import Text from ".";

describe("Text", () => {
  it("renders with default props", () => {
    const text = faker.lorem.sentence();
    render(<Text>{text}</Text>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("renders with custom size", () => {
    const text = faker.lorem.sentence();
    const { container } = render(<Text size="lg">{text}</Text>);
    expect(container.firstChild).toHaveClass("text-lg");
  });

  it("renders with custom weight", () => {
    const text = faker.lorem.sentence();
    const { container } = render(<Text weight="bold">{text}</Text>);
    expect(container.firstChild).toHaveClass("font-bold");
  });

  it("renders with custom variant", () => {
    const text = faker.lorem.sentence();
    render(<Text variant="h1">{text}</Text>);
    expect(screen.getByText(text).tagName).toBe("H1");
  });

  it("renders with custom className", () => {
    const text = faker.lorem.sentence();
    const customClass = faker.lorem.word();
    const { container } = render(<Text className={customClass}>{text}</Text>);
    expect(container.firstChild).toHaveClass(customClass);
  });

  it("handles click events", () => {
    const handleClick = vi.fn();
    const text = faker.lorem.sentence();
    render(<Text onClick={handleClick}>{text}</Text>);
    screen.getByText(text).click();
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders with multiple props combined", () => {
    const text = faker.lorem.sentence();
    const { container } = render(
      <Text size="xl" weight="bold" variant="h2">
        {text}
      </Text>
    );
    expect(container.firstChild).toHaveClass("text-4xl");
    expect(container.firstChild).toHaveClass("font-bold");
    expect(screen.getByText(text).tagName).toBe("H2");
  });
});
