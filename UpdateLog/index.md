# v26

> ⚠️ 版本号格式更改为: X年.X月.X日

> ⚠️ 原 **gitee** 提示“**包含不适合公开的内容**”，故 **issue** (建议、bug) 迁移至 [github](https://github.com/wamich/personal-vocabulary)。

## v26.8.5

1. “直译”改为**一次性**渲染。  
   不再进行流式渲染，各浏览器存在渲染差异bug。[@zengqiao111111](https://github.com/wamich/personal-vocabulary/issues/28)
1. 更新**微软**翻译服务。  
   此前旧微软翻译不可用，影响范围：内容页“机译”、选项页“生词语境”。[@Derron-z](https://github.com/wamich/personal-vocabulary/issues/31)
1. 修复**内容页**“生词一览”按钮点击无效。[@Derron-z](https://github.com/wamich/personal-vocabulary/issues/31)
1. 修复**选项页**“生词列表”菜单生词排序。[@Derron-z](https://github.com/wamich/personal-vocabulary/issues/31)
1. 新增测试模型是否**连接**正常按钮。
   ![测试连接](../screenshot/update/26.8/llm-test-conn.jpg#max-width-768px){data-zoomable}

## v26.7.23

### 会员付费权益: "同步"

1. 取消插件内登录/注册，功能移至[官网](https://mingchang.wang/member/profile)
2. 增加付费“同步”权益
3. 所有注册用户已自动赠送。
   ![收藏语句](../screenshot/update/26.7/sync-benefit.png)

### AI大模型

1. 增加**思考**内容展示  
   ![收藏语句](../screenshot/update/26.7/thinking.png)
2. 增加**额外**配置，主要用来：**禁用思考模式**，以便于**快速得到结果**  
   ![收藏语句](../screenshot/update/26.7/extra-body.png#max-width-720px){data-zoomable}
3. 支持Claude **@wx:阿喜**
4. API地址更新：腾讯、商汤、阶跃；新增miniMax

### Anki 导出

1. 增加“简化版”牌组 [@10kmaggots](https://github.com/wamich/personal-vocabulary/issues/22)
2. 增加直译导出
  ![收藏语句](../screenshot/update/26.7/anki-ai-lit.jpeg#max-width-512px){data-zoomable}

### 交互

1. iPad 更好支持触控笔交互 **@wx:陈捷**
2. 根据页面运行状态更新插件图标。红色：插件在网页中运行，灰色：未运行。
3. 优化 YouTube 评论取句
