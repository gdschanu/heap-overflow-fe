import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import problemRouter from '@/problem/router'
import coderRouter from '@/coder/router'
import contestRouter from '@/contest/router'
import blogRouter from '@/blog/router'
import homePageRouter from '@/homepage/router'

let routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Landing',
		component: () => import('@/homepage/components/HomePage.vue'),
		meta: {
			type: 'public'
		}
	},
	{
		path: '/:error',
		name: 'Error',
		component: () => import('@/shared/views/Error.vue'),
		meta: {
			type: 'public'
		}
	},
]

routes = [...routes, ...blogRouter, ...coderRouter, ...problemRouter, ...contestRouter, ...homePageRouter]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
