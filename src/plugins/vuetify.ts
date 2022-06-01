import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import {
//   VApp, VAppBar, VSpacer, VBtn, VIcon, VMain, VImg,
// } from 'vuetify/lib/components';
// Locals
import ar from 'vuetify/src/locale/ar';
import en from 'vuetify/src/locale/en';

Vue.use(Vuetify, {
  // components: {
  //   VApp, VAppBar, VSpacer, VBtn, VIcon, VMain, VImg,
  // },
});

export default new Vuetify({
  rtl: true,
  lang: {
    locales: { ar, en },
    current: 'ar',
  },
  theme: {
    themes: {
      light: {
        primary: '#000',
        secondary: '#999',
      },
    },
  },
});
