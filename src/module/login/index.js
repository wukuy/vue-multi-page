import Vue from 'vue';
import App from './view.vue';
import '@assets/css/global.styl';
import '@assets/font/iconfont.css';

new Vue({
    el: '#app',
    render: h=> h(App)
});