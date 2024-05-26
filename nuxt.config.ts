// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "ILM Topup",
    }
  },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    viewer: true,
  },
  css: ["~/assets/css/main.css", "~/assets/css/circles.css", "~/assets/css/twitter-bootstrap.css"],
})
