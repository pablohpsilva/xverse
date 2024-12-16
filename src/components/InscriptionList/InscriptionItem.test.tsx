import { render, screen } from "@testing-library/react";
import { faker } from "@faker-js/faker";
import { describe, it, expect } from "vitest";

import InscriptionItem from "./InscriptionItem";

describe("InscriptionItem", () => {
  const defaultProps = {
    walletAddress: faker.finance.ethereumAddress(),
    inscriptionId: faker.string.alphanumeric(20),
  };

  it("renders inscription item with truncated id", () => {
    render(<InscriptionItem {...defaultProps} />);

    expect(screen.getByTestId("InscriptionItem")).toBeInTheDocument();
    expect(screen.getByTestId("InscriptionItem.text")).toHaveTextContent(
      /^Inscription.+/
    );
  });

  it("truncates inscription id based on truncateLength prop", () => {
    const truncateLength = 5;
    render(
      <InscriptionItem {...defaultProps} truncateLength={truncateLength} />
    );

    const text = screen.getByTestId("InscriptionItem.text").textContent;
    expect(text?.replace("Inscription ", "").length).toBeLessThanOrEqual(
      truncateLength
    );
  });

  it("adds suffix when truncateSuffix prop is provided", () => {
    const truncateSuffix = "...";
    render(
      <InscriptionItem {...defaultProps} truncateSuffix={truncateSuffix} />
    );

    expect(screen.getByTestId("InscriptionItem.text").textContent).toContain(
      truncateSuffix
    );
  });

  it("generates correct link href", () => {
    render(<InscriptionItem {...defaultProps} />);

    const link = screen.getByTestId("InscriptionItem");
    expect(link).toHaveAttribute(
      "href",
      `/${defaultProps.walletAddress}/inscription/${defaultProps.inscriptionId}`
    );
  });
});
