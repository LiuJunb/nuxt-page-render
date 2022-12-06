// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true,
  routeRules: {
    "/": { ssr: true }, // ssr
    "/category": { ssr: false }, // csr
    "/cart": { static: true }, //
    "/profile": { swr: true }, // ssr
  },
});
