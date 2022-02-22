import { createRouter, createWebHashHistory } from 'vue-router'

//主要组件
import Login from '../components/user/Login.vue'
import Home from '../components/home/Home.vue'
import Wellcom from '../components/Wellcome.vue'

//子组件
const router = createRouter({
    history: createWebHashHistory(),

    // 组件区
    routes: [
        { path: '/', redirect: '/wellcom' },
        { path: '/login', component: Login },
        {
            path: '/home', component: Home, children: [
                // {path: '/aside' , component: Aside}
            ]
        },
        { path: '/wellcom', component: Wellcom }
    ]
})



//导航守卫, to:去的地方(网络地址),  from来的地方(网络地址),  next:(放行令牌)
// 导航守卫 用于拦截
router.beforeEach((to, from, next) => {
    next()
})

export default router