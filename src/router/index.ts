import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    // {
    //     path: '',
    //     redirect: '/baseFunction',
    // },
    {
        path: '/',
        name: 'baseFunction',
        component: () => import('@/views/baseFunction.vue'),
    },
    {
        path: '/apply',
        name: 'apply',
        component: () => import('@/views/apply.vue'),
    },
    {
        path: '/userInfo',
        name: 'userInfo',
        component: () => import('@/views/userInfo.vue'),
    },
    {
        path: '/userInfo1',
        name: 'userInfo1',
        component: () => import('@/views/userInfo1.vue'),
    },
    {
        path: '/userInfo3',
        name: 'userInfo3',
        component: () => import('@/views/userInfo3.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
