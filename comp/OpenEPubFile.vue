<template lang="pug">
div(v-show="!fileOpened" style="max-width: 900px; margin: auto;")
  div(class="pt-4")
    UploadDragger(
        class="shadow"
        v-model:fileList="fileList"
        name="file"
        accept=".ePub"
        :multiple="false"
        :showUploadList="false"
        :beforeUpload="beforeUpload"
        :disabled="loading"
      )
        div(class="flex justify-center items-center gap-2")
          p(class="ant-upload-drag-icon !m-0 !leading-6")
            FileWordOutlined
          div
            p(class="ant-upload-text font-bold !leading-6") 打开 ePub 文件
            p(class="ant-upload-hint !m-0 !leading-6") 点击或拖拽文件至此区域即可

Spin(v-show="fileOpened" :spinning="loading")
  div(ref="ePubContainer" id="ePubContainer" class="flex-1" style="overflow-y: auto;")

Teleport(to="ul.VPDocOutlineItem.root")
  li(v-for="item in data" :key="item.id" class="cursor-pointer" @click="jumpTo(item.href)")
    span(class="outline-link" :title="item.label" :href="item.href") {{ item.label }}
    ul(v-if="item.subitems?.length" class="VPDocOutlineItem nested")
      li(v-for="sItem in item.subitems" :key="sItem.id" class="cursor-pointer" @click.stop="jumpTo(sItem.href)")
        span(class="outline-link" :title="sItem.label" :href="sItem.href") {{ sItem.label }}
</template>

<script setup lang="ts">
import { FileWordOutlined } from "@ant-design/icons-vue";
import { Spin, UploadDragger, message } from "ant-design-vue";
import ePub, { Book, type NavItem, type Rendition } from "epubjs";
import "jszip";
import queryString from "query-string";
import { onMounted, onUnmounted, ref, watchEffect } from "vue";

const fileOpened = ref(false);

const fileList = ref([]);

const ePubContainer = ref<HTMLDivElement>();

const loading = ref(false);

const beforeUpload = (file: File) => {
  renderFile(file);
  return false;
};

const renderFile = async (file: File) => {
  loading.value = true;
  await renderEPub(file);
  loading.value = false;
};

const data = ref<NavItem[]>([]);

let prevTitle = "";
let outlineTitleEl: HTMLDivElement | null = null;
let outlineItemEl: HTMLUListElement | null = null;

watchEffect(() => {
  outlineItemEl ??= document.querySelector("#VPContent .aside-container nav.VPDocAsideOutline");
  outlineTitleEl ??= outlineItemEl?.querySelector(".outline-title") as HTMLDivElement | null;

  if (data.value.length) {
    outlineItemEl?.classList.add("has-outline");
    if (outlineTitleEl) {
      if (!prevTitle) prevTitle = outlineTitleEl.innerText;
      outlineTitleEl.innerText = "目录";
    }
  } else {
    outlineItemEl?.classList.remove("has-outline");
    if (outlineTitleEl) {
      if (prevTitle) outlineTitleEl.innerText = prevTitle;
    }
  }
});

let book: Book;
let rendition: Rendition;

onUnmounted(() => {
  book?.destroy();
});

const renderEPub = async (blob: Blob) => {
  fileOpened.value = true;
  const buffer = await blob.arrayBuffer();
  book = ePub(buffer);
  rendition = book.renderTo("ePubContainer", {
    flow: "scrolled-doc",
    width: "100%",
    allowScriptedContent: true,
  });

  const toc = await book.loaded.navigation;
  data.value.length = 0;
  toc.forEach((chapter) => data.value.push(chapter));
  rendition.display(data.value[0].href);
  // console.log(data.value);
};

const jumpTo = (href: string) => {
  // console.log("jumpTo", href);
  rendition?.display(href);
};

const renderUrl = async (url: string) => {
  loading.value = true;
  try {
    const resp = await fetch(url);
    const blob = await resp.blob();
    await renderEPub(blob);
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
.outline-link {
  display: block;
  line-height: 32px;
  font-size: 14px;
  font-weight: 400;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.5s;
}

.nested {
  padding-right: 16px;
  padding-left: 16px;
}
</style>
