import Vue from 'vue'
import App from './App'
import router from './router'
import { firestorePlugin } from 'vuefire';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false
Vue.use(firestorePlugin);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
