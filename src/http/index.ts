/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import Request from 'luch-request'
import { useUserStore } from '@/store/user'

export const createHttp = () => {
  const mode = import.meta.env.MODE
  const userStore = useUserStore()
  switch (mode) {
    case 'development':
      uni.baseUrl = 'http://127.0.0.1:8080'
      break
    case 'test':
      uni.baseUrl = 'https://test.example.com/webapi'
      break
    default:
      uni.baseUrl = `https://prod.example.com/webapi`
  }
  console.log(mode, uni.baseUrl)

  const http = new Request({
    baseURL: uni.baseUrl
  })

  http.interceptors.request.use(
    (config) => {
      if (userStore.user && userStore.user.token) {
        config.header = {
          ...config.header,
          Authorization: `Bearer ${userStore.user.token}`
        }
      }
      /* return Promise.reject(config) 会取消本次请求 */
      return config
    },
    (config) => {
      console.error('interceptors request err', config)
      return Promise.reject(config)
    }
  )
  http.interceptors.response.use(
    (response) => {
      return response.data.data || response.data
    },
    (response) => {
      /*  对响应错误做点什么 （statusCode !== 200） */
      console.error('interceptors res err', response)
      const { config, data } = response
      if (!config.header) {
        config.header = {}
      }

      let errMsg = '服务器维护中'
      if (data) {
        if (data.code === 0) {
          return Promise.resolve(data.data)
        }
        errMsg = data.code > 0 ? data.msg : data
      }
      if (response.statusCode === 401 || errMsg === 'Unauthorized') {
        config.header.toast = 'false'
        userStore.logout()
        uni.reLaunch({ url: '/pages/index/index' })
      }

      if (config.header.toast !== 'false') {
        uni.showToast({
          title: errMsg,
          icon: 'error'
        })
      }
      return Promise.reject(errMsg)
    }
  )
  // @ts-ignore
  uni.http = http
  return http
}
/**
 * 用法：在main.js中
 * ```js
 * import Http from './http'
 *
 * app.use(Pinia)
 * // 必须放置于Pinia之后
 * app.use(Http)
 * ```
 */
export default {
  install: () => {
    createHttp()
  }
}
