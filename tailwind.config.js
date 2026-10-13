/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main 4-Color Palette
        primary: '#4C1D95',       // Deep Purple - Main brand color
        secondary: '#05c9faff',     // Rose Gold - Accent color
        tertiary: '#3a3a38ff',      // Warm Cream - Background/light
        accent: '#166534',        // Forest Green - Nature/spa element
        
        // Extended palette variations
        'primary-light': '#7C3AED',
        'primary-dark': '#2E1065',
        'secondary-light': '#FB7185',
        'secondary-dark': '#BE123C',
        'tertiary-light': '#FEF9E7',
        'tertiary-dark': '#FDE68A',
        'accent-light': '#22C55E',
        'accent-dark': '#15803D',
        
        // Background colors
        background: '#FEF3C7',
        surface: '#FEF9E7',
        header: '#4C1D95',
        dark: '#1E1B4B',
        
        // Text colors
        'text-primary': '#1E1B4B',
        'text-secondary': '#6B7280',
        'text-light': '#FEF3C7',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'bounce': 'bounce 2s infinite',
        'pulse': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        glow: {
          '0%': {
            boxShadow: '0 0 5px rgba(124, 58, 237, 0.5)'
          },
          '100%': {
            boxShadow: '0 0 20px rgba(124, 58, 237, 0.8)'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'spa-gradient': 'linear-gradient(135deg, #4C1D95 0%, #E11D48 50%, #166534 100%)',
        'cream-gradient': 'linear-gradient(135deg, #FEF3C7 0%, #FEF9E7 100%)',
      }
    },
  },
  plugins: [],
}
