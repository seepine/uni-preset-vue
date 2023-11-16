import { defineStore } from 'pinia'
import type { UserState, User } from './types'

const defaultUser: User = {
  id: '',
  token: '',
  fullName: '点击登录',
  phone: '',
  avatarUrl: '/static/avatar.png',
  claims: {}
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: uni.getStorageSync('userInfo') || defaultUser
  }),
  getters: {},
  actions: {
    login(val: User) {
      this.user = val
      uni.setStorage({
        key: 'userInfo',
        data: val
      })
    },
    logout() {
      this.user = defaultUser
      uni.removeStorageSync('userInfo')
      uni.removeStorageSync('token')
    }
  }
})
