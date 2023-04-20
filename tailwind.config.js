/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    theme: {
      fontFamily: {
        'sans': 'Space Grotesk, Helvetica, Arial, sans-serif',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}
