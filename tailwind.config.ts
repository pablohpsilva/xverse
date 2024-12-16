import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background, #1A1A1A)",
        foreground: "var(--color-foreground, #FFFFFF)",
        inputBackground: "var(--color-input-background, #24252C)",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".page-wrapper": {
          width: "100%",
          maxWidth: "1080px",
          margin: "0 auto",
        },
      });
    }),
  ],
} satisfies Config;
