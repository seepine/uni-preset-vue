import { defineStore } from 'pinia'

type ThemeMode = 'system' | 'light' | 'dark'
interface ThemeState {
  themeMode: ThemeMode
  systemTheme: 'light' | 'dark'
}
const CACHE_KEY = 'current_theme'
const cacheTheme = uni.getStorageSync(CACHE_KEY)

export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => ({
    themeMode: cacheTheme !== '' ? cacheTheme : 'system',
    systemTheme: 'light'
  }),
  getters: {
    isDark: (state): boolean => {
      if (state.themeMode === 'system') {
        return state.systemTheme === 'dark'
      }
      return state.themeMode === 'dark'
    }
  },
  actions: {
    setTheme(theme: ThemeMode) {
      this.themeMode = theme
      uni.setStorageSync(CACHE_KEY, theme)
    },
    init() {
      const themeChange = (e: any): void => {
        this.systemTheme = e.theme === 'dark' ? 'dark' : 'light'
        console.info(
          `system theme change, themeMode:${this.themeMode}, systemTheme:${this.systemTheme}, isDark:${this.isDark}`
        )
      }
      uni.getSystemInfo({
        success: (e) => {
          themeChange(e)
        }
      })

      uni.onThemeChange((e) => {
        themeChange(e)
      })
    }
  }
})
