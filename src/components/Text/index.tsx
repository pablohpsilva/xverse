import { FC, PropsWithChildren } from "react";
import { tv, type VariantProps } from "tailwind-variants";

import type { FontTextType, FontWeight } from "@/types/fonts";

export type TextProps = {
  className?: string;
  id?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  variant?: FontTextType;
  weight?: FontWeight;
  disabled?: boolean;
  onClick?: () => void;
} & VariantProps<typeof textVariants>;

const textVariants = tv({
  base: "font-sans text-inherit",
  variants: {
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-2xl",
      xxl: "text-7xl",
    },
    weight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },
    variant: {
      h1: "text-5xl",
      h2: "text-4xl",
      h3: "text-3xl",
      h4: "text-2xl",
      h5: "text-xl",
      h6: "text-lg",
      p: "",
      span: "",
    },
  },
  defaultVariants: {
    decoration: "none",
    family: "sans",
    color: "inherit",
    size: "sm",
    weight: "normal",
    transform: "normal-case",
  },
});

const Text: FC<PropsWithChildren<TextProps>> = ({
  variant = "span",
  size = "sm",
  weight = "semibold",
  children = null,
  className,
  disabled = false,
  ...props
}) => {
  const Variant = variant;
  const generatedClassName = textVariants({
    variant,
    size,
    weight,
    className,
    disabled,
  });

  return (
    <Variant className={generatedClassName} {...props}>
      {children}
    </Variant>
  );
};

export default Text;
