import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'

// normalize
import 'modern-normalize/modern-normalize.css'

// plugins
import '@/plugins/vuesax'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
