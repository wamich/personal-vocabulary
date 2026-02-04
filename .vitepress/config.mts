import UnoCSS from "unocss/vite";
import { DefaultTheme, defineConfig } from "vitepress";

const miniSearch: DefaultTheme.LocalSearchOptions["miniSearch"] = {
  options: {
    processTerm: (term) => {
      // @ts-ignore
      const segmenter = Intl.Segmenter && new Intl.Segmenter("zh", { granularity: "word" });
      if (!segmenter) return term;
      const tokens = new Set<string>();
      for (const seg of segmenter.segment(term)) {
        const segment = seg.segment as string;
        if (segment.length >= 2) tokens.add(segment);
        if (/[A-Z]+/g.test(segment)) tokens.add(segment.toLowerCase());
      }
      // @ts-ignore
      return [...tokens];
    },
  },
};

const zhSearchLocales: DefaultTheme.LocalSearchOptions["locales"] = {
  root: {
    translations: {
      button: {
        buttonText: "搜索文档",
        buttonAriaLabel: "搜索文档",
      },
      modal: {
        noResultsText: "无法找到相关结果",
        resetButtonTitle: "清除查询条件",
        footer: {
          selectText: "选择",
          navigateText: "切换",
          closeText: "关闭",
        },
      },
    },
  },
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // github pages 有base前缀，而官网没有
  base: process.env.DEPLOY_TARGET === "gh" ? "/personal-vocabulary/" : "/",
  vite: {
    plugins: [UnoCSS()],
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      },
    },
  },

  lang: "zh-Hans",
  title: "个人词库",
  titleTemplate: "高亮/朗读/翻译/直译/语法/Anki",
  description: "生词高亮、实时朗读、翻译|直译、词法依赖、语法分析、Anki制卡",

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ["link", { rel: "icon", href: "/hl.svg" }],
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-38WMZRMCSW",
      },
    ],
    [
      "script",
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-38WMZRMCSW');
      `,
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: "/hl.svg", width: 24, height: 24 },
    outline: "deep",

    nav: [
      { text: "首页", link: "/" },
      { text: "教程", link: "/Tutorial/", activeMatch: "/Tutorial/" },
      { text: "更新", link: "/UpdateLog/", activeMatch: "/UpdateLog/" },
      { text: "FAQ", link: "/FAQ" },
      {
        text: "英语",
        items: [
          {
            text: "旋元佑进阶文法",
            target: "_blank",
            link: "https://grammar.codeyu.com/",
          },
          {
            text: "英语在线网站",
            target: "_blank",
            link: "/EnglishOnline",
          },
          // {
          //   text: "《神奇树屋》分享",
          //   target: "_blank",
          //   link: "https://gitee.com/wamich/personal-vocabulary/issues/IANRF5",
          // },
          // {
          //   text: "《生活大爆炸》分享",
          //   target: "_blank",
          //   link: "https://gitee.com/wamich/personal-vocabulary/issues/IAMA9D",
          // },
        ],
      },
      {
        text: "文件",
        items: [
          {
            text: ".md",
            target: "_blank",
            link: "/preview/Markdown",
          },
          {
            text: ".docx",
            target: "_blank",
            link: "/preview/Docx",
          },
          {
            text: ".ePub",
            target: "_blank",
            link: "https://app.flowoss.com/",
            // link: "/preview/ePub",
          },
          {
            text: ".pdf",
            target: "_blank",
            link: "https://mingchang.wang/pdf.js/web/viewer.html",
          },
        ],
      },
      { text: "隐私", link: "/Privacy" },
      {
        text: "建议",
        link: "https://github.com/wamich/personal-vocabulary/issues",
      },
      { text: "联系", link: "/Contact" },
    ],

    sidebar: {
      "/Tutorial": [
        {
          text: "桌面端",
          collapsed: true,
          items: [
            { text: "Edge", link: "/Tutorial/Edge" },
            { text: "Chrome", link: "/Tutorial/Chrome" },
            { text: "Safari", link: "/Tutorial/Safari" },
            {
              text: "使用教程",
              items: [
                { text: "弹窗功能", link: "/Tutorial/Desktop/Setting" },
                { text: "内容交互", link: "/Tutorial/Desktop/Show" },
                { text: "设置功能", link: "/Tutorial/Desktop/Manage" },
                { text: "视频", link: "/Tutorial/" },
              ],
            },
          ],
        },
        {
          text: "移动端",
          collapsed: true,
          items: [
            { text: "iOS", link: "/Tutorial/iOS" },
            { text: "Android", link: "/Tutorial/Android" },
            { text: "使用教程", link: "/Tutorial/Mobile" },
          ],
        },
        {
          text: "AI大模型",
          collapsed: true,
          items: [
            { text: "提供商", link: "/Tutorial/Gpt/provider/" },
            { text: "提示词", link: "/Tutorial/Gpt/prompt/" },
          ],
        },
      ],

      "/UpdateLog": [
        {
          text: "更新日志",
          items: [
            { text: "v0.16", link: "/UpdateLog/" },
            { text: "v0.15", link: "/UpdateLog/0.15" },
            { text: "v0.14", link: "/UpdateLog/0.14" },
            { text: "v0.13", link: "/UpdateLog/0.13" },
            { text: "v0.12", link: "/UpdateLog/0.12" },
            { text: "v0.11", link: "/UpdateLog/0.11" },
            { text: "v0.10", link: "/UpdateLog/0.10" },
            { text: "v0.9", link: "/UpdateLog/0.9" },
            { text: "v0.8", link: "/UpdateLog/0.8" },
            { text: "v0.7", link: "/UpdateLog/0.7" },
            { text: "v0.6", link: "/UpdateLog/0.6" },
            { text: "v0.5", link: "/UpdateLog/0.5" },
            { text: "v0.4", link: "/UpdateLog/0.4" },
            { text: "v0.3", link: "/UpdateLog/0.3" },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/wamich/personal-vocabulary",
      },
    ],

    footer: {
      copyright: `Copyright © 2023-${new Date().getFullYear()}`,
    },

    lastUpdatedText: "最后更新",

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outlineTitle: "本页",

    search: {
      provider: "local",
      options: {
        locales: { ...zhSearchLocales },
        miniSearch,
      },
    },
  },

  sitemap: {
    hostname: "https://mingchang.wang",
    lastmodDateOnly: false,
  },
});
