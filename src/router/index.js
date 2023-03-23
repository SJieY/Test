import vue from "vue";
import VueRouter from "vue-router";

vue.use(VueRouter);

import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写push和replace方法，解决重复点击报错问题
VueRouter.prototype.push = function (location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    originPush.call(this, location).catch(() => {});
  } else {
    originPush.call(this, location, onResolved, onRejected);
  }
};
VueRouter.prototype.replace = function (location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    originReplace.call(this, location).catch(() => {});
  } else {
    originPush.call(this, location, onResolved, onRejected);
  }
};

export default new VueRouter({
  routes: [
    {
      name: "home",
      path: "/home",
      component: Home,
      meta: { show: true },
    },

    {
      name: "search",
      path: "/search/:keyword?",
      component: Search,
      meta: { show: true },
      props: (route) => ({
        keyword: route.params.keyword,
        k: route.query.k,
      }),
    },

    {
      name: "login",
      path: "/login",
      component: Login,
      meta: { show: false },
    },

    {
      name: "register",
      path: "/register",
      component: Register,
      meta: { show: false },
    },

    {
      path: "*",
      redirect: "/home",
    },
  ],
});
