<template lang="pug">
CopyOutlined(@click="copy" class="hover:text-blue-400 cursor-copy" title="复制")
</template>

<script setup lang="ts">
import { CopyOutlined } from "@ant-design/icons-vue";

const props = defineProps<{
  text: string;
}>()

const copy = () => {
  navigator.clipboard.writeText(props.text);
}
</script>

<style scoped></style>
