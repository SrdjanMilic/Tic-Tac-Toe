import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import mixin from './mixin';

Vue.config.productionTip = false;

Vue.mixin(mixin);

window.app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
