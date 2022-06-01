import { Component, Vue } from 'vue-property-decorator';
import styles from './home.module.scss';
import WithRender from './home.html';

@WithRender
@Component({
})
export default class App extends Vue {
  public styles = styles;
}
