import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";

import TextField from ".";

describe("TextField", () => {
  it("renders label and input", () => {
    const label = faker.lorem.word();
    render(<TextField label={label} />);

    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("shows error message when error prop is provided", () => {
    const error = faker.lorem.sentence();
    render(<TextField label={faker.lorem.word()} error={error} />);

    expect(screen.getByText(error)).toBeInTheDocument();
  });

  it("disables input when disabled prop is true", () => {
    render(<TextField label={faker.lorem.word()} disabled />);

    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("calls onChange when input value changes", async () => {
    const onChange = vi.fn();
    const value = faker.lorem.word();

    render(<TextField label={faker.lorem.word()} onChange={onChange} />);

    const input = screen.getByRole("textbox");
    await userEvent.type(input, value);

    expect(onChange).toHaveBeenCalled();
    expect(input).toHaveValue(value);
  });

  it("applies error styles when error prop is provided", () => {
    render(
      <TextField label={faker.lorem.word()} error={faker.lorem.sentence()} />
    );

    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("border-red-500");
  });

  it("applies disabled styles when disabled prop is true", () => {
    render(<TextField label={faker.lorem.word()} disabled />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("bg-gray-100");
  });
});
