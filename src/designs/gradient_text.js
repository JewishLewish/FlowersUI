const gradientText = {};

const animatedGradientKeyframes = {
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
};

gradientText['@keyframes animatedgradient'] = animatedGradientKeyframes;

gradientText[".animate-gradient"] = {
  backgroundSize: '300%',
  WebkitAnimation: 'animatedgradient 6s ease infinite alternate',
  MozAnimation: 'animatedgradient 6s ease infinite alternate',
  animation: 'animatedgradient 6s ease infinite alternate',
};



gradientText[".gradient_text"] = {
  '@apply bg-gradient-to-r text-transparent bg-clip-text': {},
};


module.exports = {
  gradientText,
  animatedGradientKeyframes,
};
