import { AxiosResponse } from 'axios';
import BaseAxiosModule from './base-axios-module';

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

class LogicLikeApi extends BaseAxiosModule implements ILogicLikeApi {
  constructor () {
    super();
  }

  public async getCourses(): Promise<AxiosResponse<ICourse[], any>> {
    const response = await this.axiosInstance.get('/courses.json');
    return response;
  }
}

export const logicLikeApi = new LogicLikeApi();
