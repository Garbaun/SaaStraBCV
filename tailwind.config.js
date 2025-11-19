/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'crt-flicker': 'crt-flicker 0.1s infinite',
        'crt-glow': 'crt-glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'crt-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.95' },
        },
        'crt-glow': {
          '0%': { 
            'text-shadow': '0 0 5px #00ff00, 0 0 10px #00ff00',
            'filter': 'brightness(1)'
          },
          '100%': { 
            'text-shadow': '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00',
            'filter': 'brightness(1.2)'
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
