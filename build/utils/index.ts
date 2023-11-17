/*
 * @Author: WuGuang
 * @Date: 2023-10-26 16:25:55
 * @Description: 
 * 
 * Copyright (c) 2023 by KYNY, All Rights Reserved. 
 */
import path from "path";

/**
 * @description: 返回项目根目录、不带/
 */
export function getRootPath(): string {
  return path.resolve(process.cwd());
}

/**
 * 获取项目src路径
 * @description: 末尾不带斜杠
 * @param {*} srcName - src目录名称(默认: "src")
 */
export function getSrcPath(srcName = 'src') {
  const rootPath = getRootPath();
  return `${rootPath}/${srcName}`;
}
