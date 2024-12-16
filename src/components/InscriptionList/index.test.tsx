import { render, screen } from "@testing-library/react";
import { faker } from "@faker-js/faker";
import InscriptionList from "./index";
import { describe, it, expect } from "vitest";

describe("InscriptionList", () => {
  const mockWalletAddress = faker.finance.ethereumAddress();
  const mockList = Array.from({ length: 3 }, () => ({
    inscriptionId: faker.string.uuid(),
    txid: faker.string.alphanumeric(64),
  }));

  it("renders loading state", () => {
    render(
      <InscriptionList walletAddress={mockWalletAddress} isLoading={true} />
    );

    expect(screen.getByTestId("InscriptionList.loading")).toBeInTheDocument();
  });

  it("renders nothing when list is empty", () => {
    const { container } = render(
      <InscriptionList walletAddress={mockWalletAddress} list={[]} />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("renders list of inscriptions", () => {
    render(
      <InscriptionList walletAddress={mockWalletAddress} list={mockList} />
    );

    expect(screen.getByTestId("InscriptionList.list")).toBeInTheDocument();
    expect(
      screen.getByTestId("InscriptionList.list.item.2.InscriptionItem")
    ).toBeInTheDocument();
  });
});
