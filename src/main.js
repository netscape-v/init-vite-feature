import { createApp } from 'vue'
import router from './router.js'
import axios from 'axios'

// 引入APP组件容器
import App from './components/App.vue'

// 挂载App容器
const app =  createApp(App)

//请求后台接口的前路径自定义 (koa2的接口)
axios.defaults.baseURL= ''

//全局引用axios
app.config.globalProperties.$http = axios

//全局路由
app.use(router)

// 挂载主组件
app.mount('#app')