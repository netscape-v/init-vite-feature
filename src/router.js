import { createRouter, createWebHashHistory } from 'vue-router'

//主组件
import User from './components/user/User.vue'

//子组件

const router = createRouter({
    history: createWebHashHistory(),

    routes: [
        { path: '/user', component: User }, 
    ]
})

//导航守卫
router.beforeEach((to, from, next) => {
    next()
})

export default router