import { createApp } from 'vue'
import router from './routers/router.js'
import axios from 'axios'
import 'element-plus/dist/index.css'

// import  './element-plus/index.js'

// 引入APP组件容器
import App from './components/App.vue'

// 挂载App容器
const app = createApp(App)

// 全局消息 //全局引用axios , Vue3 不推荐这种用法，直接组件中引入
// app.config.globalProperties.$message = ElMessage

//请求后台接口的前路径自定义 (nestjs的接口)
axios.defaults.baseURL = 'http://localhost:8080'

//全局引用axios , Vue3 不推荐这种用法，直接组件中引入
// app.config.globalProperties.$http = (axios)=>{}

//全局路由
app.use(router)

// 挂载主组件
app.mount('#app')