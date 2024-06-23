/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#ffceff", // Replace with your desired color value
      },
    },
  },
  plugins: [],
}
