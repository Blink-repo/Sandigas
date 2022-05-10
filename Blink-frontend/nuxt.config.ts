import { defineNuxtConfig } from 'nuxt'


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    plugins: ['@/plugins/flowbite.client.ts'],
    css: ["@/assets/styles/styles.css"],
    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js"),
        },
    },
});
