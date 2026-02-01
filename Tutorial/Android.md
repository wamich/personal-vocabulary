# Android

## 安装 Edge

安装扩展的前提：

- 安装 Edge **正式版本**
- 需要 **开启 flags**，来支持安装在线插件。

### 步骤

以小米应用商店中 Edge v143 正式版本 为例：

1. 下载 Edge，并打开；
2. 在 Edge 地址栏输入 **edge://flags**
3. 在出现的页面上，你会看到一个搜索栏。在这里输入 **edge-extensions-search**
4. **启用** 该标志，并按提示**重启** Edge。  
   ⚠️ 小米重启，需要杀死 Edge，再重新打开，才能实现重启效果！
5. 再次打开 Edge， 打开扩展选项，会在顶部看到**搜索栏**。

<AndroidEdgeSetup />

## 过时教程，仅供参考

1. 下载 <b style="color: red;">Canary 版</b>（**注意**：<del>正式版</del>、<del>Beta 版</del>、<del>Dev 版</del> 目前均不行）。

   - 百度网盘：[microsoft-edge-canary-133-0-3065-0.apk](https://pan.baidu.com/s/1OZl9gVT_0y5WSrS9lv-Gvg?pwd=cccc)

     > Edge 版本**经过测试**，可以保证插件的可用性

   - 在线下载：[Edge Canary 最新版](https://microsoft-edge-canary.en.uptodown.com/android)，**需要科学上网**

     > Edge 版本**更新频繁**，**不能保证插件的稳定性**

2. <b style="color: red;">扩展安装教程：</b>

   1. 下载并安装 **Edge Canary** 版
   2. 打开 Edge，点击 <span :class="isDark ? 'bg-gray-700' : 'bg-gray-200'" class="px-1"><MenuOutlined class="inline-block text-[14px] align-[2px]" /></span> (地址栏最右侧图标)，选择 <kbd>设置</kbd> 进入 **设置页**
   3. 在 **设置页** 最下方，点击 <kbd>关于 Microsoft Edge</kbd>，进入 **关于页**
   4. 在 **关于页** 最下方，**连击 5 次** Edge Canary 版本号，过程中出现提示 5 more taps to enable Developer options
   5. 再从 **关于页** <u>返回至</u> **设置页**，点击 **新出现**的 <kbd>开发人员选项</kbd>，进入 **开发者选项页** (Developer options)
   6. 点击 <kbd>Extension install by id</kbd>，在输入框中输入 **个人词库** 的插件 ID: **egcempkdcpieaobaboopdpfkehceccbd** （请长按复制）。点击 <kbd>确定</kbd> 后，自动安装插件
   7. 后续插件有新版本时，也会自动升级。

  <AndroidSetup />

<script setup>
  import { MenuOutlined } from "@ant-design/icons-vue";
  import { useData } from 'vitepress';
  import AndroidSetup from '../comp/AndroidSetup.vue';
  import AndroidEdgeSetup from '../comp/AndroidEdgeSetup.vue';

  const { isDark } = useData();
</script>
