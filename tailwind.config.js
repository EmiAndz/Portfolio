/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0b0a08",
          900: "#12110d",
          850: "#16140f",
          800: "#1a1814",
          700: "#26221c",
          600: "#3a352c",
          500: "#524a3d",
        },
        cream: {
          50:  "#faf6ea",
          100: "#ece5d3",
          200: "#dcd4bd",
          300: "#bcb39a",
          400: "#8a8270",
          500: "#605a4e",
        },
        acid: {
          300: "#e3ff6e",
          400: "#d4ff3d",
          500: "#bff000",
        },
      },
      fontFamily: {
        display: ['"Newsreader"', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'meta': '0.22em',
      },
    },
  },
  plugins: [],
}
