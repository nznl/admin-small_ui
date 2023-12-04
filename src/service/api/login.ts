import { request } from "../request/index";

export function loginApi(data?: any): Promise<any> {
//  return new CreateAxios({ baseURL: '/api'}).instance({
//     method: 'post',
//     url: '/login',
//     data: data,
//     // transformResponse: [data => {
//     //   const parseData = JSON.parse(data);
//     //   parseData.msg = '修改';
//     //   return parseData;
//     // }]
//   })
  return request.post('/login', data);
}