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
    plugin(({ addUtilities }) => {
      // Define the custom utility classes for duplicating and blurring "cloud" items with dynamic blur values
      const cloudUtilities = {};

      // Generate blur utility classes for blur values from 1 to 10
      for (let i = 1; i <= 100; i++) {
        cloudUtilities[`.cloud-${i}`] = {
          position: 'relative',
          zIndex: '1',
        };

        cloudUtilities[`.cloud-${i}::after`] = {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'inherit',
          filter: `blur(${i}px)`, // Set the blur effect based on the class
          zIndex: '-1',
        };
      }

      // Add a normal .cloud class with a fixed blur value of 10px
      cloudUtilities[".cloud"] = {
        position: 'relative',
        zIndex: '1',
      };

      cloudUtilities[".cloud::after"] = {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'inherit',
        filter: 'blur(10px)', // Set the fixed blur value
        zIndex: '-1',
      };

      cloudUtilities[".animate-cloud::after"] = {
        animation: 'pulse 2s infinite', // Customize animation duration and other properties as needed
      };

      // Add the custom utility classes for duplicating and blurring "cloud" items to the generated CSS
      addUtilities(cloudUtilities, ['before']);
    }),
  ],
  corePlugins: {
    preflight: false,
  },
};
