import Vue from 'vue';
import Vconsole from 'vconsole'
import App from './App.vue';
import router from './router/index';
import store from './store/index';

let vConsole = new Vconsole()

Vue.use(vConsole);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
