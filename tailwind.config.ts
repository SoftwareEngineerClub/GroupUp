import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBackground: "#F5F6FA",
      },
    },
  },
  plugins: [],
} satisfies Config;
