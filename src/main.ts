import Vue from 'vue';
import './registerServiceWorker';
import router from './router';
// Plugins
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';
// Components
import App from './views/App/app';
// styles
import '../public/styles/main.scss';

Vue.config.productionTip = false;

declare global {
  interface Window {
    $config: any;
    $disableNewRequestsPeriod: any;
    ShowLoader(): void;
    HideLoader(): void;
  }
}

new Vue({
  i18n,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
