// POST、GET、ALL
import { AxiosInstance, AxiosRequestConfig } from 'axios';
import CreateAxios from './axios';

export function createRequest(config: AxiosRequestConfig) {
  const customAxios = new CreateAxios(config);
  
  async function asyncRequest<T>(param: ServiceDts.RequestParam): Promise<T> {
    const { url } = param;
    const method = param.method || 'get';
    const { instance } = customAxios;
    const res = (await getRequestResponse({
      instance,
      method,
      url,
      data: param.data,
      config: param.axiosConfig
    }));
    return res;
  }

  function get<T>(url: string, config?: AxiosRequestConfig) {
    // get参数放在 config.params
    return asyncRequest<T>({ url, method: 'get', axiosConfig: config });
  }

  function post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return asyncRequest<T>({ url, method: 'post', data, axiosConfig: config});
  }
  return {
    get,
    post
  }
}

async function getRequestResponse(params: {
  instance: AxiosInstance;
  method: ServiceDts.RequestMethod;
  url: string;
  data?: any;
  config?: AxiosRequestConfig;
}) {
  const { instance, method, url, data, config } = params;

  let res: any;
  if (method === 'get' || method === 'delete') {
    res = await instance[method](url, config);
  } else {
    res = await instance[method](url, data, config);
  }
  return res;
}