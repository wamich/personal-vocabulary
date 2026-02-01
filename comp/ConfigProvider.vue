<template>
  <ConfigProvider
    :theme="{
      algorithm: isDark ? darkAlgorithm : defaultAlgorithm,
    }"
  >
    <slot />
  </ConfigProvider>
</template>

<script lang="ts" setup>
import { ConfigProvider, theme } from "ant-design-vue";
import { useData } from "vitepress";

const { darkAlgorithm, defaultAlgorithm } = theme;

const { isDark } = useData();
</script>
