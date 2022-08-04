import 'vuetify/styles'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import App from './App.vue'
import router from './router'
import { loadFonts } from './plugins/webfontloader'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

loadFonts()

const vuetify = createVuetify({
    components,
    directives
})

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
