/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // This includes all JavaScript and TypeScript files in the src directory
    './src/Main.{js,ts,jsx,tsx}', // Include main.js or main.ts files explicitly if needed
    './src/Page.{js,ts,jsx,tsx}',  // Include page.js or page.ts files explicitly if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
