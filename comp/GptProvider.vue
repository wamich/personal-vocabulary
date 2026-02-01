<template>
  <h2 :id="name">{{ name }}</h2>

  <table>
    <tr>
      <th>Info</th>
      <th>Url</th>
    </tr>
    <tr>
      <td>baseUrl</td>
      <td>{{ baseUrl }} <CopyBtn :text="baseUrl"></CopyBtn></td>
    </tr>
    <tr>
      <td>官网</td>
      <td>
        <a :href="siteUrl" target="_blank">{{ siteUrl }}</a>
      </td>
    </tr>
    <tr>
      <td>ApiKey</td>
      <td>
        <a :href="applyUrl" target="_blank">{{ applyUrl }}</a>
      </td>
    </tr>
    <tr>
      <td>查询模型</td>
      <td>
        <a :href="modelUrl" target="_blank">{{ modelUrl }}</a>
      </td>
    </tr>
  </table>
  <table v-if="recommendModels.length">
    <caption class="font-semibold text-left">
      推荐模型
    </caption>
    <tr>
      <th>模型名称</th>
      <th>模型简介</th>
    </tr>
    <tr v-for="model of recommendModels">
      <td>{{ model.name }} <CopyBtn :text="model.name"></CopyBtn></td>
      <td>{{ model.desc }}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import CopyBtn from "./CopyBtn.vue";

defineProps<{
  name: string; // 供应商名称
  baseUrl: string; // openAI 兼容的 baseUrl，用于真实接口请求
  siteUrl: string; // 官网 URL
  applyUrl: string; // api key 申请的 URL
  modelUrl: string; // 查看模型列表的 URL
  // 推荐模型
  recommendModels: {
    name: string; // 模型名称
    desc: string; // 推荐理由
  }[];
}>();
</script>
