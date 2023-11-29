import Vue from 'vue';
import Router from 'vue-router';
import routes from './router';
import store from "../store";

Vue.use(Router);

const router = new Router({
    routes,
});

// before
router.beforeEach((to, from, next) => {
    let guest = ['login'];

    let auth = [
        'index',
    ];

    let isLogin = store.state.user.token;

    if (isLogin && guest.indexOf(to.name) > -1) {
        next(false);
        return;
    }

    if (!isLogin && auth.indexOf(to.name) > -1) {
        next('/login');
        return;
    }

    next();
});

// after
router.afterEach(() => {
    window.scrollTo(0, 0);
});

export default router;
