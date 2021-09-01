import Vue from 'vue';
import howler from 'howler';

import App from './App.vue';

var app = new Vue({
    el : '#app-iq',
    data: {
    	screen: 'flowGame'
    },
    render: h => h(App)
});
