import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// Locals
import ar from 'vuetify/src/locale/ar';
import en from 'vuetify/src/locale/en';

import {
  VApp,
  VBtn,
  VMain,
} from 'vuetify/lib/components';

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VMain,
  },
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
