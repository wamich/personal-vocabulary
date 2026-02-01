# 常见问题

## Safari 无法自动发音

- Safari 默认不会自动发音，需要多一次点击操作

## MDX 词典服务 {#mdx}

### 服务开源地址

js-mdx-server: [Github](https://github.com/wamich/js-mdx-server)

### 推荐词典

#### [精装 - 牛津高阶双解第 10 版完美版（OALDPE）](https://forum.freemdict.com/t/topic/30466)

::: tip 优化 oaldpe.js

[作者 Hazuki](https://forum.freemdict.com/u/Hazuki) 已在新版词典的网盘文件中做了优化，可以正常使用。  
也可下载修改 <a href="/mdx/oaldpe.js" download> oaldpe.js</a> 文件，替换原 <u>oaldpe.js</u> 文件。（见修改说明）

:::

::: details oaldpe.js 修改说明：

- 词典作者已完善：<del>增加缓存： $.ajaxSetup({ cache: true });</del>
- 词典作者已完善：<del>修改 isPreview 函数，阻止 iframe 中直接使用 parent.document 报错</del>
- 由于缺少 eruda、opencc-js、crypto-js 库文件，为避免请求 404，注释本地请求，直接请求 CDN

:::

::: tip 注意事项
朗读例句时，需要 **关闭** 例句在线朗读（Online Example Pron）

![例句在线朗读](./screenshot/faq/mdx-online-example-pron.webp#max-width-320px){data-zoomable}

情形: 当 **开启** 例句在线朗读（Online Example Pron）时，**MDX 服务** 播放本地音频的同时，**词典 oaldpe.js** 也播放在线音频，造成同时播放的冲突。

原因: **MDX 服务** 对 **离线音频** 进行了 **通用处理**，但同时 **词典 oaldpe.js** 也对此进行了处理。
:::

## 切换单词等级时的注意事项

1. 服务端只存最必要的数据
2. 切换后，要确保与切换前，原来文章中怎么高亮的，切换后，依然还是一样高亮。

举例：

低等级（高中）向 高等级（四级）切换时：

- 之前处于低等级（高中）时，则四级 **默认是生词** ，但经过使用后， **四级中存在熟词记录、生词语境** 。
- 当切换为高等级（四级）时，则四级 **默认是熟词** ，对于前面高等级（四级）中生成的熟词记录、生词语境，则 **删除熟词记录、生词语境**。

高等级（四级）向 低等级（高中）切换时：

- 之前处于高等级（四级）时，则四级 **默认是熟词** ，但经过使用后， **四级中存在生词记录、生词语境** 。
- 当切换为低等级（高中）时，则四级 **默认是生词** ，对于前面高等级（四级）中生词记录，则 **删除生词记录**。

## 兼容规则 {#compatibleRule}

::: tip 情景
访问 chatGPT 网站，插件处于开启状态，在问答流式响应过程中，插件实时高亮正在进行的回答。
由于 GPT 与插件同时进行操作页面的文档结构，可能导致 GPT 认为功能出错，从而弹出崩溃页面。  
在这种情形下，可以为 chatGPT 网页 **自定义兼容区，禁止插件高亮，同时不影响插件功能**。
:::

::: details 如何获取 CSS 选择器 ？

![兼容区的css选择器1](./screenshot/faq/compatiblerule-edit-modol.jpg#max-width-320px){data-zoomable}

![兼容区的css选择器1](./screenshot/faq/compatiblerule-cssselector-1.jpg#max-width){data-zoomable}

![兼容区的css选择器2](./screenshot/faq/compatiblerule-cssselector-2.jpg#max-width){data-zoomable}

:::

## Anki

::: tip 下载

官网：<https://apps.ankiweb.net/> 。 官网首页**最下面**有不同平台的**下载链接**。

**安卓版：非谷歌商店安装方法**：

- **Github**: <https://github.com/ankidroid/Anki-Android/releases/tag/v2.20.1>  
  建议选择: **AnkiDroid-2.20.1-arm64-v8a.apk**

- **uptodown**: <https://ankidroid.en.uptodown.com/android>

- **百度网盘**: <https://pan.baidu.com/s/1WDCV_iQJNrGSQdIro8Zz2w?pwd=cccc>

:::

::: details AnkiConnect 端口占用

- 安装完 AnkiConnect 插件后，需要重启 Anki。

- 修改默认端口 8765:

![端口占用](./screenshot/faq/anki-connect-change-port.jpg#max-width){data-zoomable}

:::

::: info 移动端同步数据流传过程:

| 操作                             | 起点          | 流向 | 终点          |
| :------------------------------- | :------------ | :--- | :------------ |
| **个人词库**: 点击 **同步 Anki** | 个人词库      | ->   | 电脑端 Anki   |
| **电脑端** Anki: 点击 **同步**   | 电脑端 Anki   | ->   | Anki Web 云端 |
| **移动端** Anki: 点击 **同步**   | Anki Web 云端 | ->   | 移动端 Anki   |

文字说明:

- **生词语境** 传入到电脑端 Anki 后，在电脑端 Anki 上需要**先点击同步**，数据才能同步到 Anki Web。

- 然后，再在移动端 Anki，选择同步，才可以把 Anki Web 同步到移动端。

:::

::: details 自定义字段

第一个字段是卡片的唯一标识，新增的自定义字段不要放在第一个，否则导致无法同步。

:::

## ollama 本地大模型 跨域问题 {#ollama-cors}

设置 CORS **环境变量**: **OLLAMA_ORIGINS** ，来自[Medium 文章](https://medium.com/dcoderai/how-to-handle-cors-settings-in-ollama-a-comprehensive-guide-ee2a5a1beef0)。

::: details macOS
在 macOS 上，如果您将 ollama 作为应用程序运行，则设置环境变量涉及使用 **launchctl** 。此方法允许您定义允许哪些源访问您的资源。设置 **环境变量**：

对于允许所有域：要允许所有域从您的应用程序请求资源，请使用以下命令：

```shell
launchctl setenv OLLAMA_ORIGINS "*"
```

设置所需的 **环境变量**后，**重新启动 OLLAMA** 应用程序以应用更改。

````shell
brew services restart ollama
:::

::: details Windows
在 Windows 上，ollama 使用为用户或系统设置的 **环境变量**：

通过从任务栏退出应用程序来确保 ollama 没有运行。

打开控制面板并导航至“编辑系统 **环境变量**”。

选择编辑或创建名为 **OLLAMA_ORIGINS** 的新变量。允许所有域：

```
OLLAMA_ORIGINS=*
````

:::

::: details Linux
对于将 ollama 作为 systemd 服务运行的 Linux 用户， **systemctl** 命令用于设置 **环境变量**：

使用 systemctl edit ollama.service 在编辑器中打开服务文件。

```shell
systemctl edit ollama.service
```

在 [Service] 部分中，添加包含 CORS 设置的 Environment 行。对于无限制访问：

```ini
[Service]
Environment="OLLAMA_ORIGINS=*"
```

保存更改，然后重新加载 systemd 并使用以下命令 **重新启动 ollama**：

```shell
systemctl daemon-reload
systemctl restart ollama
```

:::

## Win 缺失内置 TTS

<WinMissTTS />

## Win Edge 浏览器 <kbd>F</kbd> 键无效

- 原因：选择文本出现“微型菜单”

- Edge 设置 -> 外观 -> 选择文本时的微型菜单 -> **关闭「选择文本时显示迷你菜单」**

  ![微型菜单](./screenshot/win-mini-menu.jpg#max-width){data-zoomable}

## 普通文本如何使用

临时方法：可以复制文本到[语雀](https://www.yuque.com/dashboard)，预览后，开启插件。

## PDF 无法使用

如果 PDF 非文字版，而是图片影印版，则无法识别。

## 打开本地 HTML 文件

用浏览器打开本地保存的网页时，如何启用插件？

::: details 网页保存到本地

建议选择 **「网页，全部」**。注意：不能选择<del>「网页（单个文件）」</del>!

**示例：**
![本地网页文件](./screenshot/faq/save-html.jpg#max-width-320px){data-zoomable}

:::

::: details 启用插件的本地权限

1. 设置权限：
   ![右键打开权限](./screenshot/faq/open-setting.png#max-width-250px){data-zoomable}
2. 授权本地文件：
   ![文件授权](./screenshot/faq/allow-file-access.png#max-width){data-zoomable}
3. 最后，用浏览器打开保存后的网页文件。
   - **点击插件图标**
   - **选择「开启高亮」**

:::

<script setup>
  import WinMissTTS from './comp/WinMissTTS.vue';
</script>
