# 大模型

<GptProvider v-for="data of dataList" :="data"></GptProvider>

<script setup>
  import GptProvider from '../../../comp/GptProvider.vue';

  const dataList = [
    {
      name: '阿里千问',
      baseUrl: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
      siteUrl: 'https://help.aliyun.com/zh/model-studio/developer-reference/get-api-key',
      applyUrl: 'https://help.aliyun.com/zh/model-studio/developer-reference/get-api-key',
      modelUrl: 'https://help.aliyun.com/zh/dashscope/developer-reference/model-introduction',
      recommendModels: [
        { name: 'qwen-plus', desc: '超大规模语言模型增强版，支持 32k 上下文'},
        { name: 'qwen-turbo', desc: '超大规模语言模型，支持 8k 上下文'},
      ]
    },
    {
      name: 'DeepSeek',
      baseUrl: 'https://api.deepseek.com',
      siteUrl: 'https://platform.deepseek.com/api_keys',
      applyUrl: 'https://platform.deepseek.com/api_keys',
      modelUrl: 'https://platform.deepseek.com/api-docs/zh-cn/pricing',
      recommendModels: [
        { name: 'deepseek-chat', desc: '擅长通用对话任务，上下文长度为 32K'},
      ]
    },
    {
      name: 'Kimi',
      baseUrl: 'https://api.moonshot.cn/v1',
      siteUrl: 'https://platform.moonshot.cn/console/api-keys',
      applyUrl: 'https://platform.moonshot.cn/console/api-keys',
      modelUrl: 'https://platform.moonshot.cn/docs/intro#模型列表',
      recommendModels: [
        { name: 'moonshot-v1-auto', desc: '(推荐) 根据当前上下文占用的 Tokens 数量，自动选择模型'},
        { name: 'moonshot-v1-8k', desc: '长度为 8k 的模型，适用于生成短文本'},
      ]
    },
    {
      name: '硅基流动',
      baseUrl: 'https://api.siliconflow.cn/v1',
      siteUrl: 'https://siliconflow.cn',
      applyUrl: 'https://cloud.siliconflow.cn/account/ak',
      modelUrl: 'https://cloud.siliconflow.cn/models',
      recommendModels: [
        { name: 'Qwen/Qwen2.5-72B-Instruct', desc: '阿里云发布的最新大语言模型系列之一'},
        { name: 'Qwen/Qwen2.5-7B-Instruct', desc: '(免费) 阿里云发布的最新大语言模型系列之一'},
        { name: 'THUDM/glm-4-9b-chat', desc: '(免费) 智谱 AI 推出的 GLM-4 系列预训练模型中的开源版本'},
      ]
    },
    {
      name: '智谱',
      baseUrl: 'https://open.bigmodel.cn/api/paas/v4',
      siteUrl: 'https://bigmodel.cn',
      applyUrl: 'https://open.bigmodel.cn/usercenter/proj-mgmt/apikeys',
      modelUrl: 'https://bigmodel.cn/console/modelcenter/square',
      recommendModels: [
        { name: 'glm-4-plus', desc: '高智能旗舰: 性能全面提升，长文本和复杂任务能力显著增强'},
        { name: 'glm-4-flash', desc: '免费模型：智谱AI首个免费大模型API，兼具“高速度”和“经济性”两大特点'},
      ]
    },
    {
      name: 'Google',
      baseUrl: 'https://generativelanguage.googleapis.com/v1beta/openai',
      siteUrl: 'https://aistudio.google.com/app/apikey',
      applyUrl: 'https://aistudio.google.com/app/apikey',
      modelUrl: 'https://ai.google.dev/gemini-api/docs/models/gemini?hl=zh-cn',
      recommendModels: [
        { name: 'gemini-2.0-flash', desc: '(免费) 下一代特性、速度和多模态生成，适用于各种多样的任务'},
      ]
    },
    {
      name: '字节跳动',
      baseUrl: 'https://ark.cn-beijing.volces.com/api/v3',
      siteUrl: 'https://console.volcengine.com/ark/region:ark+cn-beijing/apiKey',
      applyUrl: 'https://console.volcengine.com/ark/region:ark+cn-beijing/apiKey',
      modelUrl: 'https://console.volcengine.com/ark/region:ark+cn-beijing/endpoint',
      recommendModels: [
      ]
    },
    {
      name: '百度',
      baseUrl: 'https://qianfan.baidubce.com/v2',
      siteUrl: 'https://console.bce.baidu.com/qianfan/overview',
      applyUrl: 'https://console.bce.baidu.com/iam/#/iam/apikey/list',
      modelUrl: 'https://cloud.baidu.com/doc/WENXINWORKSHOP/s/Fm2vrveyu',
      recommendModels: [
        { name: 'ernie-4.0-8k', desc: '百度文心系列中效果最强大的⼤语⾔模型，支持8K上下文长度'},
        { name: 'ernie-lite-8k', desc: '(免费) 百度自研的轻量级大语言模型，支持8K上下文长度'},
      ]
    },
    {
      name: '腾讯',
      baseUrl: 'https://api.hunyuan.cloud.tencent.com/v1',
      siteUrl: 'https://console.cloud.tencent.com/hunyuan/api-key',
      applyUrl: 'https://console.cloud.tencent.com/hunyuan/api-key',
      modelUrl: 'https://cloud.tencent.com/product/hunyuan',
      recommendModels: [
      ]
    },
    {
      name: '商汤',
      baseUrl: 'https://api.sensenova.cn/compatible-mode/v1',
      siteUrl: 'https://console.sensecore.cn',
      applyUrl: 'https://console.sensecore.cn/aistudio/management/api-key',
      modelUrl: 'https://www.sensecore.cn/help/docs/model-as-a-service/nova/model/llm/GeneralLLM',
      recommendModels: [
        { name: 'SenseChat-5', desc: '最新版本模型 (V5)，128K上下文长度'},
        { name: 'SenseChat-Turbo', desc: '适用于快速问答场景'},
      ]
    },
  ]

// const DefCustom = {
//   OpenAI: {
//     baseURL: "https://api.openai.com/v1",
//     apiKey: "",
//     modelNames: import.meta.env.DEV ? ["GPT-4o-mini"] : [],
//   },
//   OpenRouter: {
//     baseURL: "https://openrouter.ai/api/v1",
//     apiKey: "",
//     modelNames: [],
//   },
//   Grok: {
//     baseURL: "https://api.x.ai/v1",
//     apiKey: "",
//     modelNames: [],
//   },
//   零一万物: {
//     baseURL: "https://api.lingyiwanwu.com/v1",
//     apiKey: import.meta.env.DEV ? "42e990b6d2d74b66856d7810d16d9016" : "",
//     modelNames: import.meta.env.DEV ? ["yi-lightning"] : [],
//   },
//   百川: {
//     baseURL: "https://api.baichuan-ai.com/v1",
//     apiKey: import.meta.env.DEV ? "sk-da7cb4c804c78748ba429940d3f020ab" : "",
//     modelNames: import.meta.env.DEV ? ["Baichuan4"] : [],
//   },
//   阶跃星辰: {
//     baseURL: "https://api.stepfun.com/v1",
//     apiKey: import.meta.env.DEV
//       ? "6LQ4IAtadV3D29cKfmKvFp9nldJHUFWfZ59ZGISQ3JUEL7mCBBMdDojuDmkOSk4h7"
//       : "",
//     modelNames: import.meta.env.DEV ? ["step-1-8k"] : [],
//   },
// };
</script>
