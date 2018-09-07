import Vue from 'vue';
import App from './view.vue';
import '@assets/css/global.styl';
import '@assets/font/iconfont.css';

let es6 = () => {
    console.log('es6 -> es5');
}

es6()

new Vue({
    el: '#app',
    render: h=> h(App)
});