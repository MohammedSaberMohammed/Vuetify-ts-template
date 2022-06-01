import 'izitoast/dist/css/iziToast.min.css';
import iZtoast, { IziToastSettings } from 'izitoast';

const getOptions = (configs: any) => ({
  position: 'bottomLeft',
  rtl: true,
  ...configs,
});

export class Toaster {
  public static error(configs: IziToastSettings) {
    return iZtoast.error(getOptions({
      title: 'خطأ',
      ...configs,
    }));
  }

  public static success(configs: IziToastSettings) {
    return iZtoast.success({
      title: 'نجاح',
      ...configs,
    });
  }
}
