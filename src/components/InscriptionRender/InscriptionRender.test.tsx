import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { faker } from "@faker-js/faker";

import InscriptionRender from ".";

describe("InscriptionRender", () => {
  it("renders image content", () => {
    const props = {
      contentType: "image/jpeg",
      src: faker.image.url(),
    };

    render(<InscriptionRender {...props} />);
    const img = screen.getByAltText("Inscription");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", props.src);
  });

  it("renders application content as link", () => {
    const props = {
      contentType: "application/pdf",
      src: faker.internet.url(),
    };

    render(<InscriptionRender {...props} />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", props.src);
    expect(link).toHaveTextContent("pdf");
  });

  it("renders html content in iframe", () => {
    const props = {
      contentType: "text/html",
      src: faker.internet.url(),
    };

    render(<InscriptionRender {...props} />);
    const iframe = screen.getByTitle("HTML inscription");
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("src", props.src);
  });

  it("returns null for unsupported content type", () => {
    const props = {
      contentType: "unknown/type",
      src: faker.internet.url(),
    };

    const { container } = render(<InscriptionRender {...props} />);
    expect(container.firstChild).toBeNull();
  });
});
