export default [
    {
        path: '/problem',
        name: 'Problem',
        component: () => import('./components/list/ProblemList.vue'),
		meta: {
			type: 'protected'
		}
    },
    {
        path: '/problem/:id',
        name: 'ProblemDetail',
        component: () => import('./components/detail/Problem.vue'),
		meta: {
			type: 'protected'
		}
    },
]
