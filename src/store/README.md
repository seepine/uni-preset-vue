## How to use ?

### 1.import

```js
import { useUserStore } from '@/store/user'
const userStore = useUserStore()

// get
userStore.name
userStore.avatar

// set
userStore.name = 'zhangsan'

userStore.$patch({
  name: 'zhangsan',
  avatar: 'https://xxxxxx.jpg'
})

// function
userStore.login(form)
// function support async
await userStore.login(form)
```
