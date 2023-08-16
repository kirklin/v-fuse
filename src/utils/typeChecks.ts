import type { ComponentPublicInstance } from "@vue/runtime-core";

const opt = Object.prototype.toString;

export function isArray(obj: any): obj is any[] {
  return opt.call(obj) === "[object Array]";
}

export function isNull(obj: any): obj is null {
  return opt.call(obj) === "[object Null]";
}

export function isBoolean(obj: unknown): obj is boolean {
  return opt.call(obj) === "[object Boolean]";
}

export function isObject(obj: any): obj is Record<string, unknown> {
  return opt.call(obj) === "[object Object]";
}

export const isPromise = <T>(obj: unknown): obj is Promise<T> => {
  return opt.call(obj) === "[object Promise]";
};

export function isString(obj: any): obj is string {
  return opt.call(obj) === "[object String]";
}

export function isNumber(obj: any): obj is number {
  return opt.call(obj) === '[object Number]' && obj === obj; // eslint-disable-line
}

export function isRegExp(obj: any) {
  return opt.call(obj) === "[object RegExp]";
}

export function isDate(obj: any) {
  return opt.call(obj) === "[object Date]";
}

export function isUndefined(obj: any): obj is undefined {
  return obj === undefined;
}

export function isFunction(obj: any): obj is (...args: any[]) => any {
  return typeof obj === "function";
}

export function isEmptyObject(obj: any): boolean {
  return isObject(obj) && Object.keys(obj).length === 0;
}

/**
 * Checks if the code is running in a server-side rendering (SSR) environment.
 * 检查代码是否在服务器端渲染（SSR）环境中运行。
 *
 * @returns {boolean} Returns true if the code is running in a server-side rendering environment,
 *                    otherwise returns false.
 *                    如果代码在服务器端渲染环境中运行，则返回 true；否则返回 false。
 */
export const isServerRendering = (() => {
  try {
    return !(typeof window !== "undefined" && document !== undefined);
  } catch (e) {
    return true;
  }
})();

/**
 * Checks if the code is running on the server-side (server) or client-side (browser) environment.
 * 检查代码是否在服务器端（服务器）或客户端（浏览器）环境中运行。
 *
 * The value of this constant will be true if the code is running on the server-side,
 * and false if it is running on the client-side.
 * 如果代码在服务器端运行，则此常量的值为 true；如果在客户端运行，则值为 false。
 *
 * @constant {boolean}
 */
export const isServer = typeof window === "undefined";

/**
 * Checks if the code is running on the client-side (browser) environment.
 * 检查代码是否在客户端（浏览器）环境中运行。
 *
 * The value of this constant will be true if the code is running on the client-side,
 * and false if it is running on the server-side.
 * 如果代码在客户端运行，则此常量的值为 true；如果在服务器端运行，则值为 false。
 *
 * @constant {boolean}
 */
export const isClient = !isServer;

// Define a function isHttpUrl that takes a string argument path and returns true if it is a valid Http URL.
// 定义一个函数 isHttpUrl，它接受一个字符串参数 path，如果它是有效的Http URL，则返回 true。
export function isHttpUrl(path: string): boolean {
  const regex = /^https?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/i;
  return regex.test(path);
}

export const isComponentInstance = (
  value: any,
): value is ComponentPublicInstance => {
  return value?.$ !== undefined;
};
