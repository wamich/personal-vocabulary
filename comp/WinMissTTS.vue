<template lang="pug">
div(class="flex gap-4 justify-center items-center flex-wrap md:flex-nowrap")
  img(class="w-[250px]" src="../screenshot/miss-tts.png")
  ul
    li 
      | 打开「设置」->「时间和语言」->「语言和区域」
    li 
      | 点击「添加语言」，添加<b>英语(美国)</b>、<b>英语(英国)</b>，最终如图设置。
      img(data-zoomable src="../screenshot/win11-time-zone.png")
    li 添加完成后，插件中 <b>TTS 声音</b> 选择框可以选择内置的 TTS 发音。
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
