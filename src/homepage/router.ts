export default [
    // example:
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: () => import('@/homepage/components/HomePage.vue'),
		meta: {
			type: 'protected'
		}
	},
]
