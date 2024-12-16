import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import _BlankIcon, { type IconProps } from "./_Blank";

describe("_BlankIcon", () => {
  const defaultProps = {
    color: "primary",
    width: 24,
    className: "",
    hoverColor: undefined,
    viewBox: "0 0 24 24",
    style: {},
  };

  const renderComponent = (props: IconProps = {}) =>
    render(
      <_BlankIcon {...defaultProps} {...props}>
        <rect />
      </_BlankIcon>
    );

  it("renders correctly with default props", () => {
    const { container } = renderComponent({
      className: "cursor-pointer fill-primary",
    });
    const svg = container.querySelector("svg");

    expect(svg).toBeTruthy();
    expect(svg?.getAttribute("width")).toBe("24");
    expect(svg?.getAttribute("height")).toBe("24");
    expect(svg?.classList).toContain("cursor-pointer");
    expect(svg?.classList).toContain("fill-primary");
  });

  it("applies custom width and viewBox", () => {
    const customProps = {
      width: 48,
      viewBox: "0 0 48 48",
    };

    const { container } = renderComponent(customProps);
    const svg = container.querySelector("svg");

    expect(svg?.getAttribute("width")).toBe("48");
    expect(svg?.getAttribute("height")).toBe("48");
    expect(svg?.getAttribute("viewBox")).toBe("0 0 48 48");
  });

  it("applies custom className", () => {
    const customProps = {
      className: "custom-class",
    };

    const { container } = renderComponent(customProps);
    const svg = container.querySelector("svg");

    expect(svg?.classList).toContain("custom-class");
  });

  it("applies hoverColor correctly", () => {
    const customProps = {
      hoverColor: "secondary",
      className: "fill-primary hover:fill-secondary group-hover:fill-secondary",
    } as IconProps;

    const { container } = renderComponent(customProps);
    const svg = container.querySelector("svg");

    expect(svg?.classList).toContain("group-hover:fill-secondary");
    expect(svg?.classList).toContain("hover:fill-secondary");
  });

  it("renders children correctly", () => {
    const { container } = renderComponent();
    const rect = container.querySelector("rect");

    expect(rect).toBeTruthy();
  });
});
