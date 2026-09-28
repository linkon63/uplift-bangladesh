import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#EE3028",
          red: "#EE3028",
          dark: "#0f1011",
          paper: "#f4f4f6",
          gray: {
            50: "#fafafa",
            100: "#f4f4f6",
            200: "#e5e5ea",
            300: "#d1d5db",
            400: "#9ca3af",
            500: "#707070",
            600: "#52525b",
            700: "#353636",
            800: "#1c1d1f",
            900: "#0f1011",
          },
        },
      },
      fontFamily: {
        sans: ["Switzer", "Inter", "sans-serif"],
        display: ["'Bebas Neue'", "Anton", "Oswald", "sans-serif"],
        digital: ["'Digital 7 Mono'", "monospace"],
      },
      maxWidth: {
        "container-large": "95rem",
      },
    },
  },
  plugins: [],
};

export default config;
