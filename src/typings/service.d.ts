declare namespace ServiceDts {
  type ContentType = 'application/json' | 'application/x-www-form-urlencoded' | 'multipart/form-data';
  type RequestMethod = 'post' | 'get' | 'put' | 'delete'
  interface RequestParam {
    url: string;
    method?: RequestMethod;
    data?: any;
    axiosConfig?: AxiosRequestConfig;
  }
}