/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0b1020',
        surface: '#0f172a',
        accent: {
          50: '#eef6ff',
          100: '#d8ecff',
          200: '#b5d9ff',
          300: '#8ac7ff',
          400: '#56b1ff',
          500: '#3e9cff',
          600: '#1d7be6',
          700: '#0f5ac0',
          800: '#0d4694',
          900: '#0e3a77',
        },
        emerald: {
          500: '#34d399',
        },
      },
      boxShadow: {
        glow: '0 20px 70px rgba(14, 165, 233, 0.32)',
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at 20% 20%, rgba(62, 156, 255, 0.08), transparent 25%), radial-gradient(circle at 80% 0%, rgba(53, 177, 227, 0.12), transparent 20%)',
      },
    },
  },
  plugins: [],
};
