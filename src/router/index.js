import Vue from 'vue'
import Router from 'vue-router'
import Layout from "@/views/layout"

Vue.use(Router)

// hidden设为false 则会在侧边栏显示
// children 是必填项 没有的话写一个空数组
export const constantRouterMap = [
    {
        path: '/',
        redirect: '/user',
        hidden: true
    },
    { // 登录模块
        path: '/login',
        name: 'login',
        component: () => import('@/views/login'),
        hidden: true
    },
    { // 首页
        path: '/layout',
        name: 'layout',
        component: Layout,
        hidden: false,
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/home'),
                meta: {
                    title: "首页",
                    icon: "home"
                },
            }
        ]
    },
    { // user模块
        path: '/user',
        name: 'user',
        component: Layout,
        meta: {
            title: "用户管理",
            icon: "home"
        },
        children: [ // user模块下的子路由
            {
                path: 'index',
                name: 'index',
                component: () => import('@/views/user'),
                meta: {
                    title: "子页面",
                    icon: "home"
                },
            },
            {
                path: 'index1',
                name: 'index1',
                component: () => import('@/views/user'),
                meta: {
                    title: "子页面",
                    icon: "home"
                },
            }
        ]
    },
    {
        path: '/404',
        component: () => import('@/views/errorPage/404'),
        hidden: true
    },
    {
        path: '/401',
        component: () => import('@/views/errorPage/401'),
        hidden: true
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

export default new Router({
    // mode: 'history', // 后端支持可以开启
    routes: constantRouterMap
})