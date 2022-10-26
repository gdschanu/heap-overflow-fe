export default [
    // example:
	{
		path: '/',
		name: 'Dashboard',
		component: () => import('@/homepage/components/HomePage.vue'),
		meta: {
			type: 'protected'
		}
	},
]
