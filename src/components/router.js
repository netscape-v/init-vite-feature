import { createRouter, createWebHashHistory } from 'vue-router'

import User from './user/User.vue'

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