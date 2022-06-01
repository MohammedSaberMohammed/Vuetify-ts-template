import { Component, Vue } from 'vue-property-decorator';
import styles from './app.module.scss';
import WithRender from './App.html';

@WithRender
@Component({
})
export default class App extends Vue {
  public styles = styles

  mounted() {
    console.log('[APP ENTRY POINT]');
  }

  public changeLanguage() {
    this.$vuetify.rtl = false;
    this.$vuetify.lang.current = 'en';
    this.$i18n.locale = 'en';
  }
}
