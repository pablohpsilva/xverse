import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { faker } from "@faker-js/faker";

import Header from ".";

describe("Header", () => {
  it("renders title", () => {
    const title = faker.lorem.words();
    render(<Header title={title} />);

    expect(screen.getByTestId("Header.title")).toHaveTextContent(title);
  });

  it("renders back button when hasBackButton is true", () => {
    const title = faker.lorem.words();
    render(<Header title={title} hasBackButton />);

    expect(screen.getByTestId("Header.backLink")).toBeInTheDocument();
  });

  it("does not render back button when hasBackButton is false", () => {
    const title = faker.lorem.words();
    render(<Header title={title} hasBackButton={false} />);

    expect(screen.queryByTestId("Header.backLink")).not.toBeInTheDocument();
  });

  it("uses custom back button href when provided", () => {
    const title = faker.lorem.words();
    const href = faker.internet.url();
    render(<Header title={title} hasBackButton backButtonHref={href} />);

    expect(screen.getByTestId("Header.backLink")).toHaveAttribute("href", href);
  });

  it("uses default '/' href when no backButtonHref provided", () => {
    const title = faker.lorem.words();
    render(<Header title={title} hasBackButton />);

    expect(screen.getByTestId("Header.backLink")).toHaveAttribute("href", "/");
  });
});
