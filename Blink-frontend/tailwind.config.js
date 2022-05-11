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
        'primary': '#ececec',
        'primary-hover': '#dedcdc',
        'secondary': '#9fd3c7',
        'secondary-hover': '#8abaaf',
        'third': '#385170',
        'third-hover': '#4f719c',
        'fourth': '#142d4c',
        'fourth-hover': '#1d416e'
      },
    },
  },
  plugins: [
  ],
}
