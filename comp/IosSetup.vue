<template lang="pug">
Steps(
  size="small" 
  direction="horizontal" 
  :current="stepCurrent" 
  :items="stepItems" 
  :responsive="false"
  :percent="stepPercent * 100"
)
Carousel(:infinite="false" arrows :beforeChange="beforeChange")
  template(#prevArrow v-if="carouselCurr!==0")
    div(class="custom-slick-arrow left-0 z-10")
      LeftCircleOutlined
  template(#nextArrow v-if="carouselCurr!==4")
    div(class="custom-slick-arrow right-0 z-10")
      RightCircleOutlined
  div(class="img-wrapper")
    img(src="../screenshot/ios/tutorial/enable1.jpg")
    span(class="absolute text-[13px]" style="left: 8%; top: 89%;")
      | 点击“大
      span(class="text-[10px]") 小
      | ”
    span(class="absolute text-[13px]" style="left: 11%; top: 36.5%;") 点击“管理扩展”
  div(class="img-wrapper")
    img(src="../screenshot/ios/tutorial/enable2.jpg")
    span(class="absolute text-[13px]" style="right: 8%; top: 25.9%;") 点击“允许”
  div(class="img-wrapper")
    img(src="../screenshot/ios/tutorial/auth3.jpg")
    span(class="absolute text-[13px]" style="left: 8%; top: 89%;")
      | 点击“大
      span(class="text-[10px]") 小
      | ”
    span(class="absolute text-[13px]" style="left: 8%; top: 36.5%;") 点击“个人词库”
  div(class="img-wrapper")
    img(src="../screenshot/ios/tutorial/auth4.jpg")
    span(class="absolute text-[13px] text-center left-1/2 -translate-x-1/2" style="top: 63%;") 点击“始终允许”
  div(class="img-wrapper")
    img(src="../screenshot/ios/tutorial/auth5.jpg")
    span(class="absolute text-[13px] text-center left-1/2 -translate-x-1/2" style="top: 63%;") 在每个网站上始终允许
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
import { Steps, Carousel } from "ant-design-vue";

const stepItems = [
  {
    title: "启用",
    description: "启用插件",
  },
  {
    title: "授权",
    description: "访问权限",
  },
];

const carouselCurr = ref(0);
const beforeChange = (_from: number, to: number) => {
  carouselCurr.value = to;
};

const stepCurrent = computed(() => (carouselCurr.value < 2 ? 0 : 1));
const stepPercent = computed(() => {
  if (carouselCurr.value < 2) return carouselCurr.value + 1 / 2;
  return (carouselCurr.value - 1) / 3;
});
</script>

<style scoped lang="scss">
.img-wrapper {
  width: unset !important;
  position: relative;
  margin-bottom: 48px;

  img {
    width: 300px;
    border-radius: 56px;
  }
  > span {
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 4px;
    padding: 0 2px;
  }
}

:deep(.slick-slide) {
  text-align: center;
  background: transparent;
  overflow: hidden;
}

:deep(.slick-dots) {
  li {
    margin-top: unset !important;

    button {
      background-color: darkgray !important;
    }
  }
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 30px;
  height: 30px;
  font-size: 30px;
  color: gray;
  transition: ease all 0.3s;
  opacity: 0.5;
  z-index: 1;
}

:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: gray;
  opacity: 0.9;
}
</style>
