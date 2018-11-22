import VueRouter from 'vue-router'

let routes = [
    {
        path: '/',
        name: 'front-end',
        component: require('../app/layouts/front-end/app'),
        children: [
            {
                path: '/',
                component: require('../app/views/front-end/home/index')
            }
        ]
    },
    {
        path: '/admin',
        name: 'back-end',
        component: require('../app/layouts/back-end/app'),
        meta: { 
            requiresAuth: true 
        },
        children: [
            {
                path: '/admin',
                component: require('../app/views/back-end/dashboard/index')
            }
            
        ]
    },
    {
        path: '/login',
        name: 'admin',
        component: require('../app/layouts/auth/app'),
        children: [
            {
                path: '/login',
                component: require('../app/views/auth/login/index')
            },
            {
                path: '/register',
                component: require('../app/views/auth/register/index')
            }
        ]
    },
    {
        path: '*',
        name: 'default',
        component: require('../app/layouts/error-page'),
        children: [
            {
                path: '*',
                component: require('../app/views/errors/page-404')
            },
            {
                path: '/404',
                name: '404',
                component: require('../app/views/errors/page-404')
            }
        ]
    }
];

const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history'
});

export default router;