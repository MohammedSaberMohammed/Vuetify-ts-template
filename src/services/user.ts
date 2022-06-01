import AxiosService from '@/services/axios';
import LoaderService from '@/services/loader';
import { Inject, Service } from 'vue-di-container';

import UserModel from '@/models/user';

@Service()
export default class UserService {
    @Inject(AxiosService) public axiosService!: AxiosService;
    @Inject(LoaderService) public loaderService!: LoaderService;

    public async getUser(): Promise<UserModel | any> {
      try {
        this.loaderService.ShowLoader();
        const url = 'api/UserInfo';
        const result = await this.axiosService.axiosInstance.get<UserModel>(url);
        this.loaderService.HideLoader();
        return result.data;
      } catch (exception) {
        return null;
      }
    }
}
