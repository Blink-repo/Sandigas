module.exports = {
  darkMode: 'media',
  content: [],
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
        'primary': '#ffffff',
        'secondary': '#000000',
        'third': '#64c4ed',
        'fourth': '#4f81c7',
      },
    },
  },
  plugins: [],
}
