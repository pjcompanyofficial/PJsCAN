/**
 * Tailwind CSS Configuration File
 *
 * This file contains the configuration for Tailwind CSS including custom colors, animations, and theme extensions.
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        accent: '#FF0000',
      },
      animation: {
        bounceSlow: 'bounce 3s infinite',
        fadeIn: 'fade-in 1s ease-in',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};