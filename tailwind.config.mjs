/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/flowbite/**/*.js',
      "./styles/**/*.css"
  ],

  theme: {
    extend: {
      backgroundImage: {
        fondo:"url('/assets/imagenconstelacion.jpg')",
      },
      fontFamily: {
        custom: ["Nunito", "sans-serif"],
      },    
      colors: {
        title: "#E20001",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    flowbite
  ],
};
