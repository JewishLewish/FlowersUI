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

cloudUtilities[".cloud"] = {
  position: 'relative',
  zIndex: '1',
};

cloudUtilities[`.cloud::after`] = {
  content: '""',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  background: 'inherit',
  filter: `blur(10px)`, // Set the dynamic blur value
  zIndex: '-1',
};


const specificTargets = [5, 10, 15, 20, 25];
for (const target of specificTargets) {
  const className = `.cloud-${target}`;

  // Define styles for the main cloud element
  cloudUtilities[className] = {
    position: 'relative',
    zIndex: '1',
    transition: 'filter 0.5s ease-in-out',
  };

  // Define styles for the pseudo-element ::after with a dynamic blur value
  cloudUtilities[`${className}::after`] = {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'inherit',
    filter: `blur(${target}px)`, // Set the dynamic blur value
    zIndex: '-1',
  };
}



// Include the @keyframes in the cloudUtilities
cloudUtilities['@keyframes pulse'] = pulseKeyframes;

cloudUtilities[".animate-cloud::after"] = {
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
};

module.exports = {
  cloudUtilities,
};
