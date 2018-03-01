import Vue from 'vue';

import App from './vue/app.vue';


export default new Vue({
  el: '#app',
  render: createElement => createElement(App),
});
