/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          0: {
            transform: "translateY(0px)"
          },
          100: {
            transform: "translateY(200px)"
          }
        }
      },
      animation: {
        slideIn: "slidein 2s ease-in-out"
      }
    },
  },
  plugins: [],
}