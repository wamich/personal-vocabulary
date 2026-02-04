<template lang="pug">
Carousel(
  autoplay
  arrows 
  dots-class="slick-dots slick-thumb" 
  :autoplaySpeed="8000"
)
  template(#customPaging="props")
    img(:src="getImgUrl(props.i)")
  div(v-for="(item, idx) in infoArr", :key="item.title")
    h3(
      class="!mt-0 font-mono !text-2xl text-center" 
      :style="{color: item.color}"
    ) {{ item.title }}
    div(class="p-2")
      img(
        class="border border-gray-400"
        style="border-radius: 20px;"
        :src="getImgUrl(idx)" 
      )
</template>

<script setup lang="ts">
import { Carousel } from "ant-design-vue";
import img1 from "./assets/查词.jpg";
import img2 from "./assets/朗读+AI直译.jpg";
import img3 from "./assets/朗读+机器翻译.jpg";
import img4 from "./assets/词法.jpg";
import img5 from "./assets/语法.jpg";

const infoArr = [
  { title: "查词 & 生词高亮", src: img1, color: "purple" },
  { title: "朗读 & AI 直译", src: img2, color: "orange" },
  { title: "朗读 & 机器翻译 ", src: img3, color: "orange" },
  { title: "NLP 词法依存", src: img4, color: "blue" },
  { title: "AI 语法分析", src: img5, color: "darkred" },
];

const getImgUrl = (i: number) => {
  return infoArr[i].src;
};
</script>
<style scoped lang="scss">
:deep(.slick-dots) {
  position: relative;
  height: auto;
  li {
    margin-top: unset !important;
  }
}
:deep(.slick-slide img) {
  display: block;
  margin: auto;
  max-width: 90%;
}
:deep(.slick-arrow) {
  display: none !important;
}
:deep(.slick-thumb) {
  bottom: 0px;
  li {
    width: 64px;
    height: 40px;
    border: 1px solid lightgray;
    img {
      width: 100%;
      height: 100%;
      display: block;
      filter: grayscale(100%);
      cursor: pointer;
    }
    &.slick-active {
      img {
        filter: grayscale(0%);
      }
    }
  }
}
</style>
