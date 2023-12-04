import axios from 'axios';
import type { AxiosResponse, AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { localStg, transformRequestData } from '@/utils';
import { StorageKey } from '@/enum';
import qs from 'qs';

export default class CreateAxios {
  instance: AxiosInstance;
  constructor(axiosConfig: AxiosRequestConfig) {
    this.instance = axios.create(axiosConfig);
    this.setInterceptor(); // 执行拦截
  }

  // 设置拦截器
  setInterceptor() {
    // 请求拦截
    this.instance.interceptors.request.use(config => {
      if (config.headers) {
        config.headers['Authorization'] = new localStg().get(StorageKey.TOKEN);
        if (config.method === 'post') {
          config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        if (config.data) {
          console.log(config.data, 1)
          config.data = qs.stringify(transformRequestData(config.data));
          console.log(config.data, 2)
        }
        if (config.params) {
          config.params = qs.stringify(transformRequestData(config.params));
        }
      }
      return config;
    }, error => {
      return Promise.reject(error);
    })

    this.instance.interceptors.response.use(async ({ data }) => {
        if (data.code !== 200){
          window.$message.error(data.msg);
        }
        return data;
    }, async error => {
      window.$message.error(error.response.statusText);
    })
  }
}