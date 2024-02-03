// Import the 'plugin' utility from Tailwind CSS
const plugin = require('tailwindcss/plugin');
const { cloudUtilities } = require('./src/designs/cloud');
const { gradientText, animatedGradientKeyframes } = require("./src/designs/gradient_text");
const { gColors } = require("./src/designs/gradient_colors");

// Define the custom plugin
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        animatedgradient: animatedGradientKeyframes,
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(cloudUtilities, ['before']);
      addUtilities(gradientText, ['before', 'responsive', 'hover']);
      addUtilities(gColors, ['before']);
    }),
  ],
  corePlugins: {
    preflight: false,
  },
};
