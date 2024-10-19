/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B88E2F",
        secondary: "#FFF3E3",
        textPrimary: "#333333",
        textSecondary: "#616161",
        accentRed: "#E97171",
        accentGreen: "#2EC1AC",
      },
      backgroundImage: {
        hero: "url('/assets/home-images/hero.png')",
        contact: "url('/assets/contact.png')",
      },
    },
  },
  plugins: [],
};
