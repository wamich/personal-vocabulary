<template lang="pug">
div(style="max-width: 900px; margin: auto;")
  div(class="pt-4")
    UploadDragger(
        class="shadow"
        v-model:fileList="fileList"
        name="file"
        accept=".docx"
        :multiple="false"
        :showUploadList="false"
        :beforeUpload="beforeUpload"
        :disabled="loading"
      )
        div(class="flex justify-center items-center gap-2")
          p(class="ant-upload-drag-icon !mb-0 !leading-6")
            FileWordOutlined
          div
            p(class="ant-upload-text font-bold !leading-6") 打开 docx 文件
            p(class="ant-upload-hint !m-0 !leading-6") 点击或拖拽文件至此区域即可

  Spin(v-show="fileOpened" :spinning="loading")
    div(ref="docxContainer")
</template>

<script setup lang="ts">
import { FileWordOutlined } from "@ant-design/icons-vue";
import { Spin, UploadDragger, message } from "ant-design-vue";
import { renderAsync, defaultOptions } from "docx-preview";
import queryString from "query-string";
import { onMounted, onUnmounted, ref } from "vue";

const fileOpened = ref(false);

const fileList = ref([]);

const docxContainer = ref<HTMLDivElement>();

const loading = ref(false);

const beforeUpload = (file: File) => {
  renderFile(file);
  return false;
};

const renderFile = async (file: File) => {
  loading.value = true;
  await renderDocx(file);
  loading.value = false;
};

const renderDocx = async (blob: Blob) => {
  fileOpened.value = true;
  if (docxContainer.value)
    await renderAsync(blob, docxContainer.value, undefined, {
      ...defaultOptions,
      // ignoreWidth: true,
      inWrapper: false,
      // debug: true,
      // experimental: true,
    });
};

const renderUrl = async (url: string) => {
  loading.value = true;
  try {
    const resp = await fetch(url);
    const blob = await resp.blob();
    await renderDocx(blob);
  } catch (error) {
    message.error("文件打开失败");
  }
  loading.value = false;
};

const parseQuery = () => {
  const parse = queryString.parseUrl(location.href);
  if (parse.query.file) {
    fileOpened.value = true;
    renderUrl(parse.query.file as string);
  } else {
    fileOpened.value = false;
  }
};
onMounted(() => {
  parseQuery();
  addEventListener("popstate", parseQuery);
});
onUnmounted(() => {
  removeEventListener("popstate", parseQuery);
});
</script>

<style scoped lang="scss">
// :deep(.docx-wrapper) {
//   // padding: 0 !important;

//   section.docx {
//     // margin: auto;
//     // padding: 36pt 45pt !important;
//   }
// }

:deep(section.docx) {
  margin-top: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  // width: unset !important;
  width: 100% !important;
  border-radius: 6px;
}
</style>
