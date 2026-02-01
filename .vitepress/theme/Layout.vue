<template>
  <!-- <h1>Custom Layout!</h1>
  <div v-if="page.isNotFound">Custom 404 page!</div>
  <div v-if="frontmatter.layout === 'home'">Custom home page!</div>
  <Content v-else /> -->

  <!-- 此处将渲染 markdown 内容 -->
  <Content />
</template>

<script setup lang="ts">
import { SoundFilled } from "@ant-design/icons-vue";
import { useData } from "vitepress";
const { page, frontmatter } = useData();
</script>

<style scoped></style>
