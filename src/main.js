import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(Router);
Vue.use(Element);

import A from "./pages/a";
import B from "./pages/b";
import C from "./pages/c";
import D from "./pages/d";

let router = new Router({
  routes: [
    //这个是空白页面，重新加载当前页面会用到
    {
      name: "blank",
      path: "/blank",
    },
    {
      path:"",
      meta:{
        title:"首页"
      }
    },
    {
      path: "/a",
      component: A,
      meta: {
        title: "A页面", //页面标题
        canMultipleOpen: true //支持根据参数不同多开不同页签
      }
    },
    {
      path: "/b",
      component: B,
      meta: {
        title: "B页面"
      }
    },
    {
      path: "/c",
      component: C,
      meta: {
        title: "C页面"
      }
    },
    {
      path: "/d",
      component: D,
      meta: {
        title: "D页面"
      }
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
