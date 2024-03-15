import { AxiosResponse } from 'axios';
import AxiosModule from './axios-module';

export interface ICourse {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
}

export interface ILogicLikeApi {
  getCourses (): Promise<AxiosResponse<ICourse[], any>>
}

class LogicLikeApi extends AxiosModule implements ILogicLikeApi {
  constructor () {
    super();
  }

  public async getCourses(): Promise<AxiosResponse<ICourse[], any>> {
    return await this.axiosInstance.get('/courses.json');
  }
}

export const logicLikeApi = new LogicLikeApi();
