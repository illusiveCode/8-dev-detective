import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        light: {
          primary: "#0079FF",
          secondary: "#697C9A",
          accent: "#4B6A9B",
          neutral: "#222731",
          bg: "#F6F8FF",
          light: "#FEFEFE",
        },
        dark: {
          primary: "#0079FF",
          secondary: "#FFFFFF",
          accent: "#141D2F",
          neutral: "#1E2A47",
        },
      },
      fontFamily: {
        sans: ["Space Mono", "sans-serif"],
      },
      fontSize: {
        h1: ["26px", "38px"],
        h2: ["22px", "33px"],
        h3: ["16px", "24px"],
        h4: ["13px", "20px"],
        body: ["15px", "25px"],
      },
    },
  },
  plugins: [],
};
export default config;
