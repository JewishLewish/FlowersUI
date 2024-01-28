// Import the 'plugin' utility from Tailwind CSS
const plugin = require('tailwindcss/plugin');

// Define the custom plugin
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    // Use the 'plugin' utility to define a custom plugin
    plugin(({ addUtilities, addComponents, e, config }) => {
      // Define the custom utility class for highlighting text
      const highlightUtilities = {
        '.highlight-text': {
          color: '#ff9900', // Set the text color to a custom highlight color
          fontWeight: 'bold', // Set the text to bold
        },
      };

      // Add the custom utility class for highlighting text to the generated CSS
      addUtilities(highlightUtilities, ['responsive', 'hover']);

      // Define the custom utility class for duplicating and blurring "cloud" items
      const cloudUtilities = {
        '.cloud': {
          position: 'relative',
          zIndex: '1',
        },
        '.cloud::after': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'inherit',
          filter: 'blur(8px)',
          zIndex: '-1', // Set the blur effect
        },
      };

      // Add the custom utility class for duplicating and blurring "cloud" items to the generated CSS
      addUtilities(cloudUtilities, ['before']);
    }),
  ],
  // Include the 'base' section in your tailwind.config.js
  corePlugins: {
    preflight: false,
  },
};
