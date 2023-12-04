import { colord } from 'colord';

/**
 * @description: 十六进制颜色转rgba
 */
export function getRgbOfColor(hex: string, alpha: number = 1) {
  return colord(hex).alpha(alpha).toRgbString();
}

// 去除对象属性null值
export function deleteObjectEmpty(obj: { [key:  string]: any}) {
  if (Object.prototype.toString.call(obj) !== '[object Object]') return;
  for (let key in obj) {
    obj[key] === null || obj[key] === undefined ? delete obj[key] : obj[key];
  }
}