// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Adding your favorite red theme color
      colors: {
        brandRed: '#d32f2f', 
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;