import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mono: ["DM Mono"],
        manrope: ["Manrope"],
        test: ["Oxanium"],
      },
      keyframes: {
        "trans-right": {
          "0% , 100%": { transform: "translatex(10px)" },
          "50%": { transform: "translatex(0)" },
        },
      },
      animation: {
        "trans-right": "trans-right 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
