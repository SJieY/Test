<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    //初始化获取分类列表数据
    this.$store.dispatch("categoryList");
  },
};
</script>

<style></style>
