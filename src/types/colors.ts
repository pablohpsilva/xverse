import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/../tailwind.config";

export const fullConfig = resolveConfig(tailwindConfig);

type TailwindColors = typeof fullConfig.theme.colors;
type TailwindColor = keyof TailwindColors;

// For nested colors like blue.500
type NestedTailwindColor = {
  [Color in TailwindColor]: TailwindColors[Color] extends string
    ? never
    : keyof TailwindColors[Color];
}[TailwindColor];

type TailwindColorValue =
  | `${TailwindColor}-${NestedTailwindColor}`
  | TailwindColor;

export type { TailwindColorValue };
