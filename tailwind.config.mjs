/** @type {import('tailwindcss').Config} */
import {heroui} from "@heroui/react";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1em",
      },
    },
    extend: {
      screens: {
        lg: "1025px",
        tablet: "991px",
        md: "769px",
        xl: "1281px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#19222D",
        primary: "#E52051FC",
      },
      fontFamily: {
        openSans: "var(--font-open-sans)",
        outfit: "var(--font-outfit)",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(270deg, #FF0C6C 0%, rgba(229, 32, 81, 0.99) 100% )",
        "secondary-gradient":
          "linear-gradient(270deg, rgba(229, 32, 81, 0.05) 0%, rgba(255, 12, 108, 0.01) 80%)",
        "section-gradient":
          "linear-gradient(258deg,  rgba(255, 230, 236, 0.5) 99.08%) rgba(255, 210, 220, 0.2)) 0.25%",
        "section-gradient-gray":
          "linear-gradient(258deg, rgba(240, 240, 240, 0.02) 0.35%, rgba(220, 220, 220, 0.2) 99.08%)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
