module.exports = {
  darkMode: 'media',
  content: [
    './index.html',
    './app.vue',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  mode: "jit",
  purge: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#e4f1fe',
        'primary-hover': '#e4f1fe',
        'secondary': '#8dc6ff',
        'secondary-hover': '#5e8ab5',
        'third': '#22313f',
        'third-hover': '#1b2733',
        'fourth': '#34495e',
        'fourth-hover': '#34495e'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
