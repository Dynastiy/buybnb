import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/layouts/homeLayout.vue'
import UserView from '../views/layouts/userLayout.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: HomeView,
        children: [{
            path: '/',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/modules/landing/indexPage.vue')
        }]
    },
    {
        path: '/dashboard',
        name: 'User',
        component: UserView,
        children: [{
                path: '/dashboard',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/modules/user/indexPage.vue')
            },
            {
                path: '/pending',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/modules/user/pendingTransactions.vue')
            },
            {
                path: '/completed',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/modules/user/completedTransactions.vue')
            },
            {
                path: '/cancelled',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/modules/user/cancelledTransactions.vue')
            },
            {
                path: '/accounts',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/modules/user/accountsView.vue')
            },
            {
                path: '/notifications',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/modules/user/notificationsView.vue')
            }
        ]
    },
    {
        path: '/sign-in',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/modules/auth/userLogin.vue')
    },
    {
        path: '/forgot-password',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/modules/auth/forgotPassword.vue')
    },
    {
        path: '/reset-password',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/modules/auth/resetPassword.vue')
    },
    {
        path: '/register',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/modules/auth/userRegistration.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes
})

export default router