import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1200px",
    },
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
        primary: {
          blue: "#0079FF",
          grey: "#697C9A",
          steel: "#4B6A9B",
          "dark-blue": "#2B3442",
        },
        neutral: {
          white: "#FEFEFE",
          "light-blue": "#F6F8FF",
        },

        dark: {
          blue: "#0079FF",
          white: "#FFFFFF",
          midnight: "#141D2F",
          navy: "#1E2A47",
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
