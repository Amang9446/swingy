/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#B468FF",

        // Light mode colors
        light: {
          background: "#FFFFFF",
          surface: "#FAFAFA",
          text: "#181C2E",
          textSecondary: "#878787",
          border: "#E5E5E5",
          error: "#F14141",
          success: "#2F9B65",
        },

        // Dark mode colors
        dark: {
          background: "#181C2E",
          surface: "#22263A",
          text: "#FFFFFF",
          textSecondary: "#B0B0B0",
          border: "#2E334A",
          error: "#FF5A5A",
          success: "#4AD78A",
        },
      },
      fontFamily: {
        'quicksand': ['Quicksand_400Regular'],
        'quicksand-light': ['Quicksand_300Light'],
        'quicksand-medium': ['Quicksand_500Medium'],
        'quicksand-semibold': ['Quicksand_600SemiBold'],
        'quicksand-bold': ['Quicksand_700Bold'],
      }
    },
  },
  plugins: [],
}
