<template lang="pug">
div(class="md-container")
  div(class="pt-4")
    UploadDragger(
        class="shadow"
        v-model:fileList="fileList"
        name="file"
        accept=".md"
        :multiple="false"
        :showUploadList="false"
        :beforeUpload="beforeUpload"
        :disabled="loading"
      )
        div(class="flex justify-center items-center gap-2")
          p(class="!mb-0 !leading-6 ant-upload-drag-icon")
            FileMarkdownOutlined
          div
            p(class="font-bold !leading-6 ant-upload-text") 打开 md 文件
            p(class="!m-0 !leading-6 ant-upload-hint") 点击或拖拽文件至此区域即可

    Card(v-if="!fileOpened" title="四六级真题" class="shadow mt-4" style="background-color: rgba(0, 0, 0, 0.01);")
      template(#extra)
        a(href="https://github.com/wamich/english-exem-md" target="_blank" class="font-semibold !text-[#ff6767]") 贡献
      div(class="flex gap-4")
        Card(title="CET4" style="width: 300px;")
          div(class="flex flex-col gap-4")
            Card(title="2023年12月")
              div(class="flex justify-between")
                a(class="!text-[#8080ff]" @click="fetchExamUrl('/exam/cet46/CET4/2023.12/cet4-2023-12-1.md')") 第1套
                a(class="!text-[#8080ff]" @click="fetchExamUrl('/exam/cet46/CET4/2023.12/cet4-2023-12-2.md')") 第2套
                a(class="!text-[#8080ff]" @click="fetchExamUrl('/exam/cet46/CET4/2023.12/cet4-2023-12-3.md')") 第3套
            Card(title="2023年6月")
              div(class="flex justify-between")
                a(class="!text-[#8080ff]" @click="fetchExamUrl('/exam/cet46/CET4/2023.06/cet4-2023-06-1.md')") 第1套
                a(class="!text-[#8080ff]" @click="fetchExamUrl('/exam/cet46/CET4/2023.06/cet4-2023-06-2.md')") 第2套
                a(class="!text-[#8080ff]" @click="fetchExamUrl('/exam/cet46/CET4/2023.06/cet4-2023-06-3.md')") 第3套
        Card(title="CET6" style="width: 300px;")
          div(class="flex flex-col gap-4")
            Card(title="2023年12月")
              div(class="flex justify-between")
                a(class="!text-[#8080ff]" @click="fetchExamUrl('/exam/cet46/CET6/2023.12/cet6-2023-12-1.md')") 第1套
                a(class="!text-[#8080ff]" @click="fetchExamUrl('/exam/cet46/CET6/2023.12/cet6-2023-12-2.md')") 第2套
                a(class="!text-[#8080ff]" @click="fetchExamUrl('/exam/cet46/CET6/2023.12/cet6-2023-12-3.md')") 第3套
            Card(title="2023年06月")
              div(class="flex justify-between")
                a(class="!text-[#8080ff]" @click="fetchExamUrl('/exam/cet46/CET6/2023.06/cet6-2023-06-1.md')") 第1套
                a(class="!text-[#8080ff]" @click="fetchExamUrl('/exam/cet46/CET6/2023.06/cet6-2023-06-2.md')") 第2套
                a(class="!text-[#8080ff]" @click="fetchExamUrl('/exam/cet46/CET6/2023.06/cet6-2023-06-3.md')") 第3套

  Spin(v-show="fileOpened" :spinning="loading")
    div(class="p-6 markdown-body" v-html="markHtml")
</template>

<script setup lang="ts">
import { FileMarkdownOutlined } from "@ant-design/icons-vue";
import { Card, Spin, UploadDragger, message } from "ant-design-vue";
import darkStyle from "github-markdown-css/github-markdown-dark.css?raw";
import lightStyle from "github-markdown-css/github-markdown-light.css?raw";
import markdownit from "markdown-it";
import { useData } from "vitepress";
import { onMounted, onUnmounted, ref, watchEffect } from "vue";
import queryString from "query-string";

const { isDark } = useData();

// 动态加载 CSS 文件的函数
function loadMdStyle(styleRaw: string) {
  let style = document.querySelector("style[github-markdown-css]");
  if (!style) {
    style = document.createElement("style");
    style.setAttribute("github-markdown-css", "true");
    document.head.appendChild(style);
  }
  style.textContent = styleRaw;
}

watchEffect(() => {
  loadMdStyle(isDark.value ? darkStyle : lightStyle);
});

// 动态加载 CSS 文件的函数
// function loadThemeStyles(href: string) {
//   let link = document.querySelector("link[data-theme]") as HTMLLinkElement;
//   if (link) {
//     link.href = href;
//   } else {
//     link = document.createElement("link");
//     link.rel = "stylesheet";
//     link.href = href;
//     link.setAttribute("data-theme", "true");
//     document.head.appendChild(link);
//   }
// }

const fileOpened = ref(false);

const fileList = ref([]);

watchEffect(() => {
  if (fileList.value.length > 0) {
    fileOpened.value = true;
  }
});

const markHtml = ref("");
const loading = ref(false);

const beforeUpload = (file: File) => {
  renderFile(file);
  return false;
};

const readAsText = async (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = (e) => {
      console.error(e);
      reject("文件解析失败");
    };
  });
};

const renderFile = async (file: File) => {
  loading.value = true;
  try {
    const content = await readAsText(file);
    renderMd(content || "");
  } catch (error) {}
  loading.value = false;
};

const fetchExamUrl = async (mdUrl: string) => {
  const { origin, pathname } = location;
  // 增加历史记录
  history.pushState({}, "", origin + pathname + "?file=" + mdUrl);
  renderUrl(mdUrl);
};

const renderUrl = async (url: string) => {
  loading.value = true;
  try {
    const resp = await fetch(url);
    const text = await resp.text();
    renderMd(text);
  } catch (error) {
    message.error("文件打开失败");
  }
  loading.value = false;
};

const renderMd = (text: string) => {
  const md = markdownit({
    html: true,
    // linkify: true,
    typographer: true,
    quotes: "“”‘’",
  });
  markHtml.value = md.render(text || "") as string;
  fileOpened.value = true;
};

const parseQuery = () => {
  const parse = queryString.parseUrl(location.href);
  if (parse.query.file) {
    fileOpened.value = true;
    renderUrl(parse.query.file as string);
  } else {
    fileOpened.value = false;
    markHtml.value = "";
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
.md-container {
  max-width: 900px;
  margin: auto;
}

:deep(th:empty) {
  display: none;
}

:deep(.markdown-body) {
  p {
    text-align: justify;
  }

  ol,
  ul,
  menu {
    list-style-type: decimal;
  }
}
</style>
