<template lang="">
  <div class="swiper-container" ref="floor1Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="c in list" :key="c.id">
        <img :src="c.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  // mounted() {
  //   new Swiper(this.$refs.floor1Swiper, {
  //     loop: true, // 循环模式选项
  //     autoplay: true,
  //     // 如果需要分页器
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     // 如果需要前进后退按钮
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   });
  // },
  watch: {
    list: {
      // 初始化监听一次
      immediate: true,
      handler() {
        this.$nextTick(() => {
          new Swiper(this.$refs.floor1Swiper, {
            loop: true, // 循环模式选项
            autoplay: true,
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>
<style lang="less" scoped></style>
