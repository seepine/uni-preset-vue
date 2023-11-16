import { type HttpDownloadResponse, type HttpRequestConfig } from 'luch-request'

type AnyObject = Record<string | number | symbol, any>
type HttpPromise<T> = Promise<T>

export interface Request {
  middleware: <T = any>(config: HttpRequestConfig) => HttpPromise<T>
  request: <T = any>(config: HttpRequestConfig<UniApp.RequestTask>) => HttpPromise<T>
  get: <T = any>(url: string, config?: HttpRequestConfig<UniApp.RequestTask>) => HttpPromise<T>
  upload: <T = any>(url: string, config?: HttpRequestConfig<UniApp.UploadTask>) => HttpPromise<T>
  delete: <T = any>(
    url: string,
    data?: AnyObject,
    config?: HttpRequestConfig<UniApp.RequestTask>
  ) => HttpPromise<T>
  head: <T = any>(
    url: string,
    data?: AnyObject,
    config?: HttpRequestConfig<UniApp.RequestTask>
  ) => HttpPromise<T>
  post: <T = any>(
    url: string,
    data?: AnyObject,
    config?: HttpRequestConfig<UniApp.RequestTask>
  ) => HttpPromise<T>
  put: <T = any>(
    url: string,
    data?: AnyObject,
    config?: HttpRequestConfig<UniApp.RequestTask>
  ) => HttpPromise<T>
  connect: <T = any>(
    url: string,
    data?: AnyObject,
    config?: HttpRequestConfig<UniApp.RequestTask>
  ) => HttpPromise<T>
  options: <T = any>(
    url: string,
    data?: AnyObject,
    config?: HttpRequestConfig<UniApp.RequestTask>
  ) => HttpPromise<T>
  trace: <T = any>(
    url: string,
    data?: AnyObject,
    config?: HttpRequestConfig<UniApp.RequestTask>
  ) => HttpPromise<T>
  download: (
    url: string,
    config?: HttpRequestConfig<UniApp.DownloadTask>
  ) => Promise<HttpDownloadResponse>
  setConfig: (onSend: (config: HttpRequestConfig) => HttpRequestConfig) => void
}

declare global {
  interface Uni {
    http: Request
    /**
     * 前端地址，一般用来反代文件url
     */
    baseUrl: string
  }
}
