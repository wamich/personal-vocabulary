<template lang="pug">
Steps(
  size="small" 
  direction="horizontal" 
  :responsive="false"
)
Carousel(:infinite="false" arrows :beforeChange="beforeChange")
  template(#prevArrow v-if="carouselCurr!==0")
    div(class="left-0 z-10 custom-slick-arrow")
      LeftCircleOutlined
  template(#nextArrow v-if="carouselCurr!==4")
    div(class="right-0 z-10 custom-slick-arrow")
      RightCircleOutlined
  div(class="img-wrapper")
    img(src="../screenshot/android/tutorial/edge/1.enable-flags.jpg")
  div(class="img-wrapper")
    img(src="../screenshot/android/tutorial/edge/2.search-extension.jpg")
  div(class="img-wrapper")
    img(src="../screenshot/android/tutorial/edge/3.confirm.jpg")
</template>

<script setup lang="ts">
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
import { Carousel, Steps } from "ant-design-vue";
import { ref } from "vue";

const carouselCurr = ref(0);
const beforeChange = (_from: number, to: number) => {
  carouselCurr.value = to;
};
</script>

<style scoped lang="scss">
.img-wrapper {
  width: unset !important;
  position: relative;
  margin-bottom: 48px;

  img {
    max-width: min(600px, 95vw);
    border-radius: 8px;
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
