// import { DateTypeLabel } from '@/enum';
// import qs from 'qs';

// // 请求数据转换
// export async function transformRequestData(requestData: any, contentType?: ServiceDts.ContentType) {
//   let data = requestData;
//   if (contentType === 'application/x-www-form-urlencoded') {
//     data = qs.stringify(requestData);
//   }
//   if (contentType === 'multipart/form-data') {
//     data = await handleFormData(requestData);
//   }
// }

// async function handleFormData(data: Record<string, any>) {
//   // const formData = new FormData();
//   // const entries = Object.entries(data);

//   // entries.forEach(async ([key, value]) => {
//   //   const isFileType = isFile(value) || (isArray(value) && value.length && isFile(value[0]));

//   //   if (isFileType) {
//   //     await transformFile(formData, key, value);
//   //   } else {
//   //     formData.append(key, value);
//   //   }
//   // });

//   // return formData;
// }

// /**
//  * 接口为上传文件的类型时数据转换
//  * @param key - 文件的属性名
//  * @param file - 单文件或多文件
//  */
// async function transformFile(formData: FormData, key: string, file: File[] | File) {
//   if (isArray(file)) {
//     // 多文件
//     await Promise.all(
//       (file as File[]).map(item => {
//         formData.append(key, item);
//         return true;
//       })
//     );
//   } else {
//     // 单文件
//     formData.append(key, file);
//   }
// }

export function transformRequestData(data: any) {
  for(let key in data) {
    if (data[key] === null || data[key] === '' || data[key] === undefined) {
      delete data[key];
    }
  }
  return data;
}