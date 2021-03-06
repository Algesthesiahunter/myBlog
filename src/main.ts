import Vue from 'vue'
import i18n from '@/lang'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/base.scss'
import '@/icons'
import '@/components/global'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
