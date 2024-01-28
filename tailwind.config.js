// Import the 'plugin' utility from Tailwind CSS
const plugin = require('tailwindcss/plugin');
const { cloudUtilities } = require('./src/cloud/cloud');

// Define the custom plugin
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(cloudUtilities, ['before']);
    }),
  ],
  corePlugins: {
    preflight: false,
  },
};
