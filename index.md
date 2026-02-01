---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
pageClass: custom-home-class

hero:
  name: "个人词库"
  text: "\n背过很多单词，阅读依然没有提升？\n无数低效时间，无数重复脑力劳动？\n痛苦、烦恼、沮丧、然习得性无助？\n现在，\n找喜欢的<a class='english-website' href='/EnglishOnline'>英文网站</a>，Try Me"
  tagline: "无中断式阅读，渐进式构建个人词库。\n解决阅读中，打乱节奏，耐心尽耗的问题。\n但是，\n仍然需要你强而猛烈的英文阅读的 Passion !"
  image:
    src: /keyboard.png
  actions:
    # - theme: brand
    #   text: 开始
    #   link: ./Tutorial
    # - theme: alt
    #   text: 下载
    #   link: ./Download
    - theme: btn-chrome-store
      text: Chrome
      link: https://chrome.google.com/webstore/detail/ecneibafmplgkfjomcbbgbajkleanoml
    - theme: btn-edge-store
      text: Edge
      link: https://microsoftedge.microsoft.com/addons/detail/egcempkdcpieaobaboopdpfkehceccbd
    - theme: btn-safari
      text: Safari(iOS)
      link: https://apps.apple.com/cn/app/id6475354792
    - theme: btn-android
      text: Edge(安卓)
      link: ./Tutorial/Android

features:
  - icon: A
    title: 查词
    details: "自动选择单词，直接展示释义"
    target: "111"
  - icon: S
    title: 翻译
    details: "自动选择语句，直接展示翻译"
  - icon: D
    title: 词法
    details: "图形化展示，词汇之间依赖关系"
  - icon: F
    title: 语法
    details: "利用大模型，自动分析语法"
  - icon:
      src: /ant-highlight.svg
    title: 高亮
    details: "依据个人词库，精准高亮网页生词"
  - icon:
      src: /ant-sound.svg
    title: 朗读
    details: "单词发音、语句朗读，视听结合"
  - icon:
      src: /ant-clock.svg
    title: 持续
    details: "阅读过程中不断完善词库"
  - icon:
      src: /ant-sync.svg
    title: 同步
    details: "生词、语境、语法在本地、云端同步"
---

## 效果一览

<ClientOnly>
  <Demo />
</ClientOnly>

<script setup lang="ts">
import Demo from './comp/demo/Index.vue';
</script>
