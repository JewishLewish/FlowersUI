const cloudUtilities = {};

// Define the @keyframes for the pulse animation with cubic-bezier timing function
const pulseKeyframes = {
  '0%, 100%': {
    opacity: '1',
  },
  '50%': {
    opacity: '0.5',
  },
};

// Include the @keyframes in the cloudUtilities
cloudUtilities['@keyframes pulse'] = pulseKeyframes;

// Define cloud styles
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

// Apply the pulse animation to ".animate-cloud::after" with cubic-bezier timing function
cloudUtilities[".animate-cloud::after"] = {
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
};

module.exports = {
  cloudUtilities,
};
