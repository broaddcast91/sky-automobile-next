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
        primaryRed: "#EA3A51",
        primaryGray: "#313131",
        secondaryRed2: "#EA3A51",
        secondaryGray2: "#707070",
        secondaryGray3: "#EBEBEB",
        secondaryGray4: "#F8F8F8",
        tertiary: "#333333",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
