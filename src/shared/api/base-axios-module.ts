import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';

export default class BaseAxiosModule {
  protected readonly axiosInstance: AxiosInstance;
  private readonly defaultOptions: CreateAxiosDefaults;

  constructor(options?: CreateAxiosDefaults) {
    const environment = import.meta.env;

    this.defaultOptions = {
      baseURL: environment.VITE_API_URL,
    };

    this.axiosInstance = axios.create(
      options ? options : this.defaultOptions,
    );
  }
}
