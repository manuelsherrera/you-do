/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},
        'darkBlue': '#1D3557',
        'midBlue': '#457B9D',
        'lightBlue': '#A8DADC',
        'lighterBlue': '#F1FAEE',
        'red': '#E63946',
      },
      animation: {
        // blob: "blob 7s infinite",
    },
    keyframes: {
      blob: {
        // "0%": {
        //   transform: "translate(0px, 0px) scale(2.1)",
        // },
        // "25%": {
        //   transform: "translate(0px, 0px) scale(2.2)",
        // },
      },
  },
  plugins: [],
}}}