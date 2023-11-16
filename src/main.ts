import { createPinia } from 'pinia'
import { createSSRApp } from 'vue'
import App from './App.vue'
import Http from './http'

const pinia = createPinia()

export const createApp = (): { app: any } => {
  const app = createSSRApp(App)
  app.use(pinia)
  app.use(Http)
  return {
    app
  }
}
