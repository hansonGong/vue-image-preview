import Vue from 'vue'
import App from './App.vue'
import directives from "./directives";

Vue.config.productionTip = false;

//通过directive下的index.js文件导入指令
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key]);
});

new Vue({
  render: h => h(App),
}).$mount('#app')
