import DefaultTheme from "vitepress/theme";
import { Theme, inBrowser, useRoute } from "vitepress";
import mediumZoom from "medium-zoom";
import { h, nextTick, watch } from "vue";
import ConfigProvider from "../../comp/ConfigProvider.vue";

import 'virtual:uno.css'
import "./custom.scss";

// import Layout from "./Layout.vue";
// import "ant-design-vue/dist/reset.css";
// import { Steps, Carousel } from "ant-design-vue";

export default {
  extends: DefaultTheme,
  Layout: () => h(ConfigProvider, null, { default: () => h(DefaultTheme.Layout) }),
  setup() {
    const route = useRoute();
    watch(
      () => route.path,
      () =>
        nextTick(() => {
          if (inBrowser) mediumZoom("[data-zoomable]", { background: "var(--vp-c-bg)" });
        }),
      { immediate: true }
    );
  },
  enhanceApp({ app, router, siteData }) {
    // app.use(Steps);
    // app.use(Carousel);
  },
} satisfies Theme;
