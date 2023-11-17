import { colord } from 'colord';

/**
 * @description: 十六进制颜色转rgba
 */
export function getRgbOfColor(hex: string, alpha: number = 1) {
  return colord(hex).alpha(alpha).toRgbString();
}