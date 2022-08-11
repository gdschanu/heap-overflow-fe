export default [
    // example:
    {
        path: '/login',
        name: 'Login',
        component: () => import("./AuthLogin.vue") //paste the component needed
    },
    {
        path: '/register',
        name: 'Register',
        component:  () => import("./AuthRegister.vue") //paste the component needed
    }
]
