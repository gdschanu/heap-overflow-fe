import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import problemRouter from '@/problem/router'
import coderRouter from '@/coder/router'
import contestRouter from '@/contest/router'
import blogRouter from '@/blog/router'

let routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Landing',
		component: () => import('@/shared/views/Landing.vue')
	},
	{
		path: '/:error',
		name: 'Error',
		component: () => import('@/shared/views/Error.vue')
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: () => import('@/shared/views/Dashboard.vue')
	},
]

routes = [...routes, ...blogRouter, ...coderRouter, ...problemRouter, ...contestRouter]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
