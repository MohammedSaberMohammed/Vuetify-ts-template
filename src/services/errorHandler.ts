import { Toaster } from './toast';

export class ErrorHandler {
  public static errorResponseHandler(error: any) {
    const isSystemError = error.response.status === 500;
    const message = isSystemError ? 'حدث خطا ما في النظام' : error.response.data;

    window.HideLoader();

    Toaster.error({ message });

    return Promise.reject(error);
  }
}
