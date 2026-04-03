import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        green: {
          primary: "#00E676",
          secondary: "#00C853",
          glow: "#00FF9D",
        },
        surface: {
          black: "#121212",
        },
      },
      backgroundImage: {
        "gradient-green":
          "linear-gradient(135deg, #00E676 0%, #00C853 55%, #00FF9D 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
