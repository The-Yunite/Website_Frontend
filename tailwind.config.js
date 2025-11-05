/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#1a1a2e',
          100: '#16162a',
          200: '#0f0f1e',
          300: '#0a0a14',
        },
        pastel: {
          pink: '#ffc4d6',
          blue: '#b4d4ff',
          purple: '#d4b4ff',
          green: '#b4ffc4',
          orange: '#ffd4b4',
          cyan: '#b4fff0',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-pastel': 'linear-gradient(135deg, #ffc4d6 0%, #b4d4ff 50%, #d4b4ff 100%)',
        'gradient-pastel-2': 'linear-gradient(135deg, #b4ffc4 0%, #b4fff0 50%, #b4d4ff 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(180, 212, 255, 0.5), 0 0 20px rgba(180, 212, 255, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(180, 212, 255, 0.8), 0 0 40px rgba(180, 212, 255, 0.5)' },
        }
      }
    },
  },
  plugins: [],
}
