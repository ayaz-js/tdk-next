/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors:{
      'brand-yellow':'#FFBB0D',
      'brand-black':'#1D1D1D',
      'white':'#fff'
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ffbb0d",

          "secondary": "#d926a9",

          "accent": "#1fb2a6",

          "neutral": "#2a323c",

          "base-100": "#1d232a",

          "info": "#3abff8",

          "success": "#36d399",

          "warning": "#fbbd23",

          "error": "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}