访问任意网站时，如果存在匹配的**域名**或**包含**规则，插件会自动进行高亮。
![高亮规则](../screenshot/options/高亮规则.png#max-width-720px){data-zoomable}

- 规则如下：

1. **域名**。网页中启用（**Alt+U**）插件时，会将当前域名**自动加入**高亮规则。
2. **包含**。注意该规则**不区分大小写**。
   ![新增包含关键字规则](../screenshot/options/add-highlight-rule.png#width-360px)
   例如，多语言网站 **MDN** 网址： <https://developer.mozilla.org/en-US/>，网址 URL 中包含 **en-US**（英）或 **zh-CN**（中）关键字，以对应不同语言。

- 在**域名规则**的情况下，如，**域名** “developer.mozilla.org”
  | 网址 | 高亮 |
  | :-------- | :--- |
  | **developer.mozilla.org**/en-US/ | ✅ |
  | **developer.mozilla.org**/zh-CN/ | ✅ |
  | learn.microsoft.com/en-US/ | ❌ |
  | learn.microsoft.com/zh-CN/ | ❌ |

  在**包含规则**的情况下，如，**包含** “en-us”
  | 网址 | 高亮 |
  | :-------- | :--- |
  | developer.mozilla.org/**en-US**/ | ✅ |
  | developer.mozilla.org/zh-CN/ | ❌ |
  | learn.microsoft.com/**en-US**/ | ✅ |
  | learn.microsoft.com/zh-CN/ | ❌ |

  在**包含规则**的情况下，如，**包含** “developer.mozilla.org/en-us”，这样只有 MDN 的英文网页才会自动高亮。
  | 网址 | 高亮 |
  | :-------- | :--- |
  | **developer.mozilla.org/en-US**/ | ✅ |
  | developer.mozilla.org/zh-CN/ | ❌ |
  | learn.microsoft.com/en-US/ | ❌ |
  | learn.microsoft.com/zh-CN/ | ❌ |
