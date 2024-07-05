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
  plugins: [
    { src: "~/plugins/pace.js", mode: "client" },
  ],
  css: ["~/assets/css/main.css", "~/assets/css/circles.css", "~/assets/css/twitter-bootstrap.css"],
  runtimeConfig: {
    public: {
      BASE_URL: process.env.API_BASE_URL,
      API_BASE_URL: process.env.API_BASE_URL + 'api/',
    },
  }
});
