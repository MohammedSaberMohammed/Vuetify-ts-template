import { Component, Vue } from 'vue-property-decorator';
import styles from './app.module.scss';
import WithRender from './app.html';

@WithRender
@Component({
})
export default class App extends Vue {
  public styles = styles;

  mounted() {
    console.log('[APP ENTRY POINT]');
  }
}
