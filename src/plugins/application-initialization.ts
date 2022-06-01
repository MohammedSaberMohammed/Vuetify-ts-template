import AxiosService from '@/services/axios';

export default async function initializeApplication(): Promise<number> {
  const result = await new AxiosService().axiosInstance.get('config.json');

  window.$config = result.data;

  return Promise.resolve(1);
}
