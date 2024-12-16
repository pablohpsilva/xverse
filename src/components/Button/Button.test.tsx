import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
import Button from "./index";

describe("Button", () => {
  it("renders children correctly", () => {
    const text = faker.lorem.word();
    render(<Button>{text}</Button>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("applies base styles correctly", () => {
    render(<Button>{faker.lorem.word()}</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-[#465AE9]");
    expect(button).toHaveClass("text-white");
  });

  it("handles click events", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>{faker.lorem.word()}</Button>);

    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies disabled styles when disabled prop is true", () => {
    render(<Button disabled>{faker.lorem.word()}</Button>);
    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
    expect(button).toHaveClass("opacity-50");
    expect(button).toHaveClass("cursor-not-allowed");
  });

  it("does not trigger onClick when disabled", async () => {
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        {faker.lorem.word()}
      </Button>
    );

    await userEvent.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });
});
