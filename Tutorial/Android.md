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

<script setup>
  import AndroidEdgeSetup from '../comp/AndroidEdgeSetup.vue';
</script>
