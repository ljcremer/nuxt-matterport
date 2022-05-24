import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {

          script: [
            // <script src="https://myawesome-lib.js"></script>
            { src: 'https://static.matterport.com/showcase-sdk/latest.js' }
          ],
        }
      }
})
