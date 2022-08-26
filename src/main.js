/*
 * Copyright (c) 2022.  Jacqueline Taylor & Friends.
 * ALL RIGHTS RESERVED!
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
