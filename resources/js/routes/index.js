import VueRouter from 'vue-router'

export const routes = [
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
        name: 'login',
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


