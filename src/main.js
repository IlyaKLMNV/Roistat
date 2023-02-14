import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import { createI18n } from 'vue-i18n';
import 'view-ui-plus/dist/styles/viewuiplus.css'
import { createPinia } from 'pinia'
import App from './App.vue'

//Internationalization
import en from 'view-ui-plus/dist/locale/en-US';


const i18n = createI18n({
  allowComposition: true,
  globalInjection: true,
  legacy: false,
  locale: 'en-US',
  messages: {
      'en-US': en
  }
});

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
  .use(ViewUIPlus, {
    i18n
  })
  .mount('#app')
