import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import About from './views/About.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  data() {
    return {
      msg: 'Welcome SM'
    }
  },
  components: { App, About },
  // render: h => h(App)
}).$mount('#vueapp')

// new Vue({
//   router,
//   store,
//   vuetify,
//   el: '#vueapp',
//   components: { App, About },
//   data() {
//     return {
//       msg: 'Welcome SM'
//     }
//   },
// })
