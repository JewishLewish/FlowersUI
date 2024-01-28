
const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(() => {
    return function({addUtilities}) {
        addUtilities({
            '.bg-color':{background:'coral'}
        })
    }
})