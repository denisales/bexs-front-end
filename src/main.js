import Vue from 'vue';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { VueMaskDirective } from 'v-mask';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import './filters';
import './validators';

import '@/styles/global.scss';

Vue.config.productionTip = false;

Vue.directive('mask', VueMaskDirective);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
