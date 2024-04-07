import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')
const config: Config = {
  darkMode: 'class',
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
    },
   colors:{
    "lightPrimary":'#2F1831',
    "lightSecondary":'#C6BDDC',
    "darkPrimary":'#181828',
    "darkSecondary":"#93c5fd",
    "white":colors.white,
    "transparent":colors.transparent,
    "black":colors.black
   }
   
   
  },
  plugins: [],
  
};
export default config;
