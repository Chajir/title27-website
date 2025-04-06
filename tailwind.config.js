/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{html,js}",  // Ensure everything in the public folder is included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
