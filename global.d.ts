/*
 * Copyright (c) 2021. J <info_together@aliyun.com> All Rights Reserved.
 */

// declare module "*.png";
// declare module "*.gif";
// declare module "*.jpg";
// declare module "*.jpeg";
// declare module "*.svg";
// declare module "*.css";
// declare module "*.less";
// declare module "*.scss";
// declare module "*.sass";
// declare module "*.styl";

// onResult 回调函数接口
declare interface OnResultCallBack<T> {
  onResult: (error: Error | null | string, data?: T) => void
}

declare type ValueOf<T> = T[keyof T]

declare type MaybeNull<T> = T | null
