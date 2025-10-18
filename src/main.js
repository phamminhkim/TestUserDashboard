import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import vi from "@/language/vi.json";
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const messages = {
  vi
}

const i18n = new VueI18n({
  locale: 'vi',
  fallbackLocale: 'vi',
  messages
})
Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
