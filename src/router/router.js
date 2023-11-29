/**
 * router
 *
 * @type {{path: string, name: string, component: {name, components}}[]}
 */

export const exchange = [
    {
        path: '/',
        name: 'index',
        component: resolve => require(['../views/index/Index'], resolve),
        // meta: {
        //     title: '',
        // }
    },
    {
        path: '/login',
        name: 'login',
        component: resolve => require(['../views/login/Login'], resolve),
    },
];

const routes = [
    ...exchange,
];

export default routes;
