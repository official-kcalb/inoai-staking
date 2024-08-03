// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
app:{
  head:{
    title:"INO Staking"
  },
  baseURL:"/",
  buildAssetsDir:"assets"
},

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts", "@pinia/nuxt", "nuxt-aos"],
  googleFonts:{
    families:{
      Poppins:{
        wght:[700],
      },

    }
  },

})