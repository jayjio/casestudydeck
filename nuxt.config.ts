// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  runtimeConfig: {
    // Private keys are only available on the server
    anthropicApiKey: process.env.ANTHROPIC_API_KEY,

    // Public keys that are exposed to the client
    public: {
      // Add any public config here if needed
    }
  }
})
