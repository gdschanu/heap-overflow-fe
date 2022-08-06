export default [
    {
        path: '/problem',
        name: 'Problem',
        component: () => import('./components/Problem.vue')
    },
    {
        path: '/problem/:id',
        name: 'ProblemDetail',
        component: () => import('./components/detail/Problem.vue')
    }
]
