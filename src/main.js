import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "swiper/css/swiper.css";
import TypeNav from "./components/TypeNav";
import Carousel from "./components/Carousel";
import "./mock/mockServe"; // 加载mockServer即可
Vue.component("TypeNav", TypeNav);
Vue.component("Carousel", Carousel);
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
