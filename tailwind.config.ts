import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "index-photo": "url(./src/Img/Index.webp)",
      },
      fontFamily: {
        roboto: ["--font-raleway"],
      },
    },
  },
  plugins: [],
};
export default config;
