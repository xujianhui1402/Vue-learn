# 参考[Vue3 官方文档](https://staging-cn.vuejs.org/)

## 简介

### 什么是 Vue？ ⭐⭐⭐

Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的`JavaScript`框架。它基于标准`HTML`、`CSS`和`JavaScript`构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面，无论任务是简单还是复杂。

- 声明式渲染：Vue 通过自己的模板语法扩展了标准 HTML，使得我们可以声明式地描述基于 JavaScript 状态输出的 HTML。

- 响应性：Vue 会自动跟踪 JavaScript 状态变化并在改变发生时响应式地更新 DOM。

### 渐进式框架 ⭐⭐⭐

Vue 是一个框架和生态，功能覆盖了大部分前端开发常见的需求。但 Web 世界又是十分多样化的，我们在 Web 上构建的东西可能在形式和规模上有很大不同。考虑到这一点，Vue 被设计成具有灵活性和可逐步集成的特点。根据你的需求场景，Vue 可以按不同的方式使用：

- 增强静态的 HTML 而无需构建步骤
- 在任何页面中作为 Web Components 嵌入
- 单页应用 (SPA)
- 全栈 / 服务端渲染 (SSR)
- Jamstack / 静态站点生成 (SSG)
- 目标为桌面端、移动端、WebGL，甚至是命令行终端

如果你是初学者，可能觉得这些概念令人生畏，别担心！理解教程和指南的内容只需要具备基础的 HTML 和 JavaScript 知识。你即使不是这些方面的专家，也能够跟上。

如果你是有经验的开发者，对于如何以最好的方式在你的项目中引入 Vue，或者是对上述的概念很好奇，我们将在[使用 Vue 的多种方式](#使用vue的多种方式)中讨论有关它们的更多细节。

无论再怎么灵活，关于 Vue 是如何工作的核心知识在所有这些用例中都是通用的。即使你现在只是一个初学者，随着你的不断成长，直到未来有能力实现更雄心勃勃的目标时，这一路上获得的知识都将会一直有用。如果你已经是一个老手，你可以根据你要解决的问题来选择使用 Vue 的最佳方式，同时保留相同的生产力。这就是为什么我们将 Vue 称为“渐进式框架”：它是一个可以与你共同成长、适应你不同需求的框架。

### API 风格：Vue 的组件可以按两种不同的风格书写：选项式 API 和组合式 API ⭐⭐⭐

- 选项式 API：使用选项式 API，我们可以用包含多个选项的对象来描述组件的逻辑，例如`data`、`methods`和`mounted`。选项所定义的属性都会暴露在函数内部的`this`上，它会指向当前的组件实例。

```
<script>
export default {
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this` 上
  data() {
    return {
      count: 0
    }
  },

  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件监听器绑定
  methods: {
    increment() {
      this.count++
    }
  },

  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

- 组合式 API ：通过组合式 API，我们可以使用导入的 API 函数来描述组件逻辑。在单文件组件中，组合式 API 通常会与 `<script setup> `搭配使用。这个`setup`attribute 是一个标识，告诉 Vue 需要在编译时进行转换，来减少使用组合式 API 时的样板代码。例如，`<script setup>` 中的导入和顶层变量/函数都能够在模板中直接使用。

```
<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 用来修改状态、触发更新的函数
function increment() {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

### 该选哪一个？

首先，这两种 API 风格都能够覆盖大部分的应用场景。它们只是同一个底层系统所提供的两套不同的接口。实际上，选项式 API 也是用组合式 API 实现的！关于 Vue 的基础概念和知识在它们之间都是通用的。

选项式 API 以“组件实例”的概念为中心 (即上述例子中的 this)，对于有面向对象语言背景的用户来说，这通常与基于类的心智模型更为一致。同时，它将响应性相关的细节抽象出来，并强制按照选项来组织代码，从而对初学者而言更为友好。

组合式 API 的核心思想是直接在函数作用域内定义响应式状态变量，并将从多个函数中得到的状态组合起来处理复杂问题。这种形式更加自由，也需要你对 Vue 的响应式系统有更深的理解才能高效使用。相应的，它的灵活性也使得组织和重用逻辑的模式变得更加强大。

在组合式 API FAQ 章节中，你可以了解更多关于这两种 API 风格的对比以及组合式 API 所带来的潜在收益。

如果你是使用 Vue 的新手，这里是我们总结的推荐：

- 出于学习目的使用时，我们推荐你采用自己更容易理解的方式。再强调一下，这两种风格的核心概念是通用的。一旦你熟悉了其中一种，另一种也无师自通。

- 出于生产目的使用时

  - 如果你不需要使用构建工具，或者只在低复杂度的场景中使用 Vue，可以采用选项式 API，例如需要渐进式集成的时候。

  - 当你想用 Vue 构建更大更完整的应用时，推荐使用组合式 API 和单文件组件。

你不必在学习阶段就确定自己非要使用哪一种风格。在接下来的文档中我们会为你提供一系列两种风格的代码供你参考，你可以随时通过左上角的 API 风格偏好来做切换。

## 快速开始

根据你的使用场景和个人偏好，在使用 Vue 时，你可以选择是否采用构建流程

### 采用构建工具

构建工具让我们能使用 Vue 单文件组件 (SFC)。Vue 官方的构建流程是基于 Vite 的，一个现代、轻量、极速的构建工具。

### 线上构建

你可以通过 StackBlitz 在线使用单文件组件尝试 Vue。StackBlitz 直接在浏览器里运行了基于 Vite 的构建设置，所以它和在本地设置几乎完全一致，但不需要在机器上安装任何依赖。

### 本地构建 ⭐⭐

`npm init vue@latest`

- 这一指令将会安装并执行 create-vue，它是 Vue 官方的项目脚手架工具。你将会看到一些诸如 TypeScript 和测试支持之类的可选功能提示：
- 如果不确定是否要开启某个功能，你可以直接按下回车键选择 No。在项目被创建后，通过以下步骤安装依赖并启动开发服务器：
- 你现在应该已经运行起来了你的第一个 Vue 项目！下面是一些补充提示：

推荐的 IDE 配置是 Visual Studio Code + Volar 扩展，选用 WebStorm 也是可以的。
更多工具细节，包括与后端框架的整合，我们会在工具链指引进行讨论。
要了解构建工具 Vite 更多背后的细节，请查看 Vite 文档。
如果你选择使用 TypeScript，请阅读 TypeScript 使用指南。

- 当你准备将应用发布到生产环境时，请运行：`npm run build`
- 此命令会在`./dist`文件夹中为你的应用创建一个生产环境的构建版本。关于将应用上线生产环境的更多内容，请阅读[生产环境部署指南](#生产环境部署指南)。

`yarn create @vitejs/app` 输入项目名称 与 vue 模版类型（JS\TS）即可快速创建 vite vue3 项目！

### 不使用构建工具\通过 HTTP 提供服务 可参考 Vue3 官方文档配置

## 创建一个 Vue 应用 ⭐🚀🎄

### 应用实例

每个 `Vue` 应用都是通过 `createApp` 函数创建一个新的 应用实例：

```
import { createApp } from 'vue'

const app = createApp({
  /* 根组件选项 */
})
```

### 根组件

我们传入 `createApp` 的对象实际上是一个组件，每个应用都需要一个“根组件”，其他组件将作为其子组件。

如果你使用的是单文件组件，我们可以直接从另一个文件中导入根组件。

```
import { createApp } from 'vue'
// 从一个单文件组件中导入根组件
import App from './App.vue'

const app = createApp(App)
```

虽然本指南中的许多示例只需要一个组件，但大多数真实的应用都是由一棵嵌套的、可重用的组件树组成的。例如，待办事项应用程序的组件树可能是这样的：

```
App (root component)
├─ TodoList
│  └─ TodoItem
│     ├─ TodoDeleteButton
│     └─ TodoEditButton
└─ TodoFooter
   ├─ TodoClearButton
   └─ TodoStatistics
```

我们会在指南的后续章节中讨论如何定义和组合多个组件。在那之前，我们得先关注一个组件内到底发生了什么。

### 挂载应用

应用实例必须在调用了 `.mount()` 方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串：

```
<div id="app"></div>
```

```
app.mount('#app')
```

应用根组件的内容将会被渲染在容器元素里面。容器元素自己将不会被视为应用的一部分。

`.mount()` 方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。

> DOM 中的根组件模板
> 当在未采用构建流程的情况下使用 Vue 时，我们可以在挂载容器中直接书写根组件模板：

```
<div id="app">
  <button @click="count++">{{ count }}</button>
</div>
```

```
import { createApp } from 'vue'

const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})

app.mount('#app')
```

当根组件没有设置 template 选项时，Vue 将自动使用容器的 innerHTML 作为模板。

### 应用配置

应用实例会暴露一个 `.config` 对象允许我们配置一些应用级的选项，例如定义一个应用级的错误处理器，它将捕获所有由子组件上抛而未被处理的错误：

```
app.config.errorHandler = (err) => {
  /* 处理错误 */
}
```

应用实例还提供了一些方法来注册应用范围内可用的资源，例如注册一个组件：

```
app.component('TodoDeleteButton', TodoDeleteButton)
```

这使得 TodoDeleteButton 在应用的任何地方都是可用的。我们会在指南的后续章节中讨论关于组件和其他资源的注册。你也可以在 API 参考中浏览应用实例 API 的完整列表。

确保在挂载应用实例之前完成所有应用配置！

### 多个应用实例

你不必再受限于一个页面只能拥有一个应用实例。`createApp` API 允许多个 `Vue` 应用共存于同一个页面上，而且每个应用都拥有自己的用于配置和全局资源的作用域

```
const app1 = createApp({
  /* ... */
})
app1.mount('#container-1')

const app2 = createApp({
  /* ... */
})
app2.mount('#container-2')
```

如果你正在使用 Vue 来增强服务端渲染 HTML，并且只想要 Vue 去控制一个大型页面中特殊的一小部分，应避免将一个单独的 Vue 应用实例挂载到整个页面上，而是应该创建多个小的应用实例，将它们分别挂载到所需的元素上去。

## 模板语法 ⭐🚀🎄⭐🚀🎄⭐🚀🎄

Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法上合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析。

在底层机制中，Vue 会将模板编译成高度优化的 JavaScript 代码。结合响应式系统，当应用状态变更时，Vue 能够智能地推导出需要重新渲染的组件的最少数量，并应用最少的 DOM 操作。

如果你对虚拟 DOM 的概念比较熟悉，并且偏向于 JavaScript 的原始力量，你也可以结合可选的 JSX 支持直接手写渲染函数而不采用模板。但请注意，这将不会享受到和模板同等级别的编译时优化。

### 文本插值

最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)：

```
<span>Message: {{ msg }}</span>
```

双大括号标签会被替换为相应组件实例中 `msg` property 的值。同时每次 `msg` property 更改时它也会同步更新。

### 原始 HTML

双大括号将会将数据插值为纯文本，而不是 HTML。若想插入 HTML，你需要使用 `v-html` 指令：

```
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

可以发现：上面为文本不是 HTML，而下面为 HTML

这里我们遇到了一个新的概念。这里看到的 `v-html` attribute 被称为一个指令。指令由 `v-` 作为前缀，表明它们是一些由 `Vue` 提供的特殊 attribuite，你可能已经猜到了，它们将为渲染的 DOM 应用特殊的响应式行为。这里我们做的事情简单来说就是：在当前组件实例上，将此元素的 innerHTML 与 `rawHtml` property 保持同步。

span 的内容将会被替换为 `rawHtml` property 的值，插值为纯 HTML——数据绑定将会被忽略。注意，你不能使用 `v-html` 来拼接组合模板，因为`Vue`不是一个基于字符串的模板引擎。相反，组件更适合作为 UI 重用和组合的基本单元。

❗ 安全警告
在网站上动态渲染任意 `HTML` 是非常危险的，因为这非常容易造成 `XSS` 漏洞。请仅在内容安全可信时再使用 `v-html`，并且永远不要使用用户提供的 `HTML` 内容。

### Attribute 绑定

双大括号不能在 HTML attributes 中使用。相应的，应该使用 `v-bind` 指令：

```
<div v-bind:id="dynamicId"></div>
```

`v-bind` 指令指示 `Vue` 将元素的 `id` attribute 与组件的 `dynamicId` property 保持一致。如果绑定的值是 `null` 或者 `undefined`，那么该 attribute 将会从渲染的元素上移除。

> 简写 ⭐🚀🎄

因为 v-bind 非常常用，我们提供了特定的简写语法：

```
<div :id="dynamicId"></div>
```

开头为 : 的 attribute 可能和一般的 `HTML` attribute 看起来不太一样，但它的确是合法的 attribute 名称字符，并且所有支持 `Vue` 的浏览器都能正确解析它。此外，他们不会出现在最终渲染的标签中。简写语法是可选的，但相信在你了解了它更多的用处后，你应该会更喜欢它。

> 布尔型 Attribute 🚀

布尔型 attribute 依据 `true` / `false` 值来决定 attribute 是否应该存在于该元素上。`disabled` 就是最常见的例子之一。

`v-bind` 在这种场景下的行为略有不同：

```
<button :disabled="isButtonDisabled">Button</button>
```

当 `isButtonDisabled` 为真值或一个空字符串 (即 `<button disabled="">`) 时，元素会包含这个 `disabled` attribute。而当其为假值时 attribute 将被忽略。

> 动态绑定多个值 🚀

如果你有像这样的一个包含多个 attribute 的 JavaScript 对象：

```
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}
```

通过不带参数的 `v-bind`，你可以将它们绑定到单个元素上：

```
<div v-bind="objectOfAttrs"></div>
```

> 使用 JavaScript 表达式 🚀

至此，我们仅在模板中绑定了一些简单的 property 键。但是 `Vue` 实际上在所有的数据绑定中都支持完整的 JavaScript 表达式：

```
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div :id="`list-${id}`"></div>
```

这些表达式都会被作为 JavaScript ，以组件为作用域解析执行。

在 Vue 模板内，JavaScript 表达式可以被使用在如下场景上：

- 在文本插值中 (双大括号)
- 在任何 Vue 指令 (以 v- 开头的特殊 attribute) attribute 的值中

❗❗❗ 仅支持表达式 ：每个绑定仅支持单一表达式，所以下面的例子都是无效的：

```
<!-- 这是一个语句，而非表达式 -->
{{ var a = 1 }}

<!-- 条件控制同样不会工作，请使用三元表达式 -->
{{ if (ok) { return message } }}
```

1. 调用函数 可以在绑定的表达式中使用一个组件暴露的方法：

```
<span :title="toTitleDate(date)">
  {{ formatDate(date) }}
</span>
```

❗❗❗ TIP：绑定在表达式中的方法在组件每次更新时都会被重新调用，因此不应该产生任何副作用，比如改变数据或触发异步操作。

2. 受限的全局访问 🚀🚀

模板中的表达式将被沙盒化，仅能够访问到有限的全局对象列表。该列表中会暴露常用的内置全局对象，比如 `Math` 和 `Date`。

没有显式包含在列表中的全局对象将不能在模板内表达式中访问，例如用户附加在 `window` 上的 property。然而，你也可以自行在 `app.config.globalProperties` 上显式地添加他们，供所有的 `Vue` 表达式使用。

> 指令

指令是带有 `v-` 前缀的特殊 attribute。`Vue` 提供了许多内置指令，包括上面我们所介绍的 `v-bind` 和 `v-html`。

指令 attribute 的期望值为一个 JavaScript 表达式 (之后要讨论到的 `v-for`、`v-on` 和 `v-slot` 将会是例外)。使用指令是为了在其表达式值变化时响应式地对 `DOM` 应用更新。以 `v-if` 为例：

```
<p v-if="seen">Now you see me</p>
```

这里，`v-if` 指令会基于表达式 `seen` 的值的真假来移除/插入该 `<p>` 元素。

1. 参数

某些指令会需要一个“参数”，在指令名后通过一个冒号隔开做标识。例如用 `v-bind` 指令来响应式地更新一个 `HTML` attribute：

```
<a v-bind:href="url"> ... </a>

<!-- 简写 -->
<a :href="url"> ... </a>
```

这里 `href` 就是一个参数，它告诉 `v-bind` 指令将表达式 `url` 的值绑定到元素的 `href` attribute 上。在简写中，参数前的一切 (例如 `v-bind:`) 都会被缩略为一个 `:` 字符。

另一个例子是 `v-on` 指令，它将监听 `DOM` 事件：

~~
<a v-on:click="doSomething"> ... </a>

<!-- 简写 -->

<a @click="doSomething"> ... </a>
~~

这里的参数是要监听的事件名称：`click`。`v-on` 也是少部分含有简写的指令之一，简写字符为 `@`。我们之后也会讨论关于事件处理的更多细节。

2. 动态参数 🚀🌙

同样在指令参数上也可以使用一个 JavaScript 表达式，需要包含在一对方括号内：

```
<!--
注意，参数表达式有一些约束，
参见下面“动态参数值的限制”与“动态参数语法的限制”章节的解释
-->
<a v-bind:[attributeName]="url"> ... </a>

<!-- 简写 -->
<a :[attributeName]="url"> ... </a>
```

这里的 `attributeName` 会作为一个 JavaScript 表达式被动态执行，计算得到的值会被用作最终的参数。举个例子，如果你的组件实例有一个数据 property `attributeName`，其值为 "href"，那么这个绑定就等价于 `v-bind:href`。🎄

相似地，你还可以将一个函数绑定到动态的事件名称上：

```
<a v-on:[eventName]="doSomething"> ... </a>

<!-- 简写 -->
<a @[eventName]="doSomething">
```

在此示例中，当 eventName 的值是 "focus" 时，`v-on:[eventName]` 就等价于 `v-on:focus`。🎄

3. 动态参数值的限制 ❗❗❗

动态参数期望结果为一个字符串，或者是 `null`。特殊值 `null` 意为显式移除该绑定。任何其他非字符串的值都将触发一个警告。

4. 动态参数语法的限制 ❗❗❗

动态参数表达式因为某些字符的缘故有一些语法限制，比如空格和引号`' | "`，在 `HTML` attribute 名称中都是不合法的。例如下面的示例：

```
<!-- 这会触发一个编译器警告 -->
<a :['foo' + bar]="value"> ... </a>
```

如果你需要传入一个复杂的动态参数，我们推荐使用 ❗❗❗ 计算属性替换复杂的表达式，也是 `Vue` 最基础的概念之一，我们很快就会讲到。

当使用 `DOM` 内嵌模板 (直接写在 `HTML` 文件里的模板) 时，我们需要 🚀🚀🚀 避免在名称中使用大写字母，因为浏览器会强制将其转换为小写：

```
<a :[someAttr]="value"> ... </a>
```

❗❗❗ 上面的例子将会在 DOM 内嵌模板中被转换为 `:[someattr]`。如果你的组件拥有 “someAttr” property 而非 “someattr”，这段代码将不会工作。

5. 修饰符

修饰符是以点开头的特殊后缀，表明指令需要以一些特殊的方式被绑定。例如 `.prevent` 修饰符会告知 `v-on` 指令对触发的事件调用 `event.preventDefault()：`

```
<form @submit.prevent="onSubmit">...</form>
```

之后在讲到 `v-on` 和 `v-model` 的功能时，你将会看到其他修饰符的例子。

最后，在这里你可以在页面最下方直观地看到[完整的指令语法](https://staging-cn.vuejs.org/guide/essentials/template-syntax.html)

## 响应式基础 (分为：选项式 API 和组合式 API) ⭐⭐⭐🌙🌙🌙

### 声明响应式状态 🚀

我们可以使用 `reactive()` 函数创建一个响应式对象或数组：

```
import { reactive } from 'vue'

const state = reactive({ count: 0 })
```

响应式对象其实是[JavaScript Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)🚀🚀🚀，其行为表现与一般对象相似。不同之处在于` Vue` 能够跟踪对响应式对象 property 的访问与更改操作。如果你对这其中的细节感到好奇，我们在[深入响应式系统](#深入响应式系统)一章中会进行解释，但我们推荐你先读完这里的主要指南。

你也可以看看：[为响应式对象标注类型](#typescript)

> 要在组件模板中使用响应式状态，请在 `setup()` 函数中定义并返回。

```
import { reactive } from 'vue'

export default {
  // `setup` 是一个专门用于组合式 API 的特殊钩子
  setup() {
    const state = reactive({ count: 0 })

    // 暴露 state 到模板
    return {
      state
    }
  }
}
```

```
<div>{{ state.count }}</div>
```

> 相似地，我们也可以在这个作用域下定义可更改响应式 state 的函数，并作为一个方法与 state 一起暴露出去：

```
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({ count: 0 })

    function increment() {
      state.count++
    }

    // 不要忘记同时暴露 increment 函数
    return {
      state,
      increment
    }
  }
}
```

暴露的方法通常会被用作事件监听器：

```
<button @click="increment">
  {{ state.count }}
</button>
```

> `<script setup>` 在 setup() 函数中手动暴露状态和方法可能非常繁琐。幸运的是，你可以通过使用构建工具来简化该操作。当使用单文件组件（SFC）时，我们可以使用 `<script setup>`来简化大量样板代码。

```
<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0 })

function increment() {
  state.count++
}
</script>

<template>
  <button @click="increment">
    {{ state.count }}
  </button>
</template>
```

`<script setup>` 中的顶层的导入和变量声明可在同一组件的模板中自动使用。
❗❗❗ 在指南的后续章节中，我们基本上都会在组合式 API 示例中使用单文件组件 + `<script setup>` 的语法，因为大多数 Vue 开发者都会这样使用。

### DOM 更新时机

当你更改响应式状态后，DOM 也会自动更新。然而，你得注意 DOM 的更新并不是同步的。相反，Vue 将缓冲它们直到更新周期的 “下个时机” 以确保无论你进行了多少次声明更改，每个组件都只需要更新一次。

若要等待一个状态改变后的 DOM 更新完成，你可以使用 `nextTick()` 这个全局 `API`：

```
import { nextTick } from 'vue'

function increment() {
  state.count++
  nextTick(() => {
    // 访问更新后的 DOM
  })
}
```

### 深层响应性

在 Vue 中，状态都是默认深层响应式的。这意味着即使在更改深层次的对象或数组，你的改动也能被检测到。

```
import { reactive } from 'vue'

const obj = reactive({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function mutateDeeply() {
  // 以下都会按照期望工作
  obj.nested.count++
  obj.arr.push('baz')
}
```

你也可以直接创建一个[浅层响应式对象](#浅层响应式对象)。它们仅在顶层具有响应性，一般仅在某些特殊场景中需要。

### 浅层响应式对象 参考：[组合式 API](https://staging-cn.vuejs.org/api/reactivity-advanced.html)

### 有状态方法

在某些情况下，我们可能需要动态地创建一个方法函数，比如创建一个预置防抖的事件处理器：

```
import { debounce } from 'lodash-es'

export default {
  methods: {
    // 使用 Lodash 的防抖函数
    click: debounce(function () {
      // ... 对点击的响应 ...
    }, 500)
  }
}
```

不过这种方法对于被重用的组件来说是有问题的，因为这个预置防抖的函数是 有状态的：它在运行时维护着一个内部状态。如果多个组件实例都共享这同一个预置防抖的函数，那么它们之间将会互相影响。

要保持每个组件实例的防抖函数都彼此独立，我们可以改为在 `created` 生命周期钩子中创建这个预置防抖的函数：

```
export default {
  created() {
    // 每个实例都有了自己的预置防抖的处理函数
    this.debouncedClick = _.debounce(this.click, 500)
  },
  unmounted() {
    // 最好是在组件卸载时
    // 清除掉防抖计时器
    this.debouncedClick.cancel()
  },
  methods: {
    click() {
      // ... 对点击的响应 ...
    }
  }
}
```

### 响应式代理 vs. 原始对象

## 计算属性 ⭐⭐

### 基础示例

模板中的表达式虽然方便，但也只能用来做简单的操作。如果在模板中写太多逻辑，会让使其变得臃肿，难以维护。比如说，我们有这样一个包含嵌套数组的对象：

```
export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  }
}
```

我们想根据 `author`` 是否已有一些书籍来展示不同的信息：

```
<p>Has published books:</p>
<span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
```

这里的模板看起来有些复杂。我们必须认真看好一会儿才能明白它的计算依赖于 `author.books`。更重要的是，如果在模板中需要不止一次这样的计算，我们可能不想写重复的代码。❗❗❗

> 因此我们推荐使用计算属性来描述依赖响应式状态的复杂逻辑。这是重构后的示例：

```
export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },
  computed: {
    // 一个计算属性的 getter
    publishedBooksMessage() {
      // `this` 指向当前组件实例
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }
}
```

则原 Vue 代码可以改写为：

```
<p>Has published books:</p>
<span>{{ publishedBooksMessage }}</span>
```

我们在这里定义了一个计算属性 `publishedBooksMessage`。

更改此应用的 `data` 中 `books` 数组的值后，可以看到 `publishedBooksMessage` 也会随之改变。

在模板中使用计算属性的方式和一般的 `property` 并无二致。`Vue` 会检测到 `this.publishedBooksMessage` 依赖于 `this.author.books`，所以当 `this.author.books` 改变时，任何依赖于 `this.publishedBooksMessage` 的绑定都将同时更新。

### [为计算属性标记类型(TS)](https://staging-cn.vuejs.org/guide/typescript/options-api.html)

### 计算属性缓存 vs 方法 🚀🚀🚀❗❗❗

你可能注意到我们在表达式中像这样调用一个函数也会获得和计算属性相同的结果：

```
<p>{{ calculateBooksMessage() }}</p>
```

```
// 组件中
methods: {
  calculateBooksMessage() {
    return this.author.books.length > 0 ? 'Yes' : 'No'
  }
}
```

若我们将同样的函数定义为一个方法而不是计算属性，两种方式在结果上确实是完全相同的，然而，不同之处在于计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算。这意味着只要 `author.books` 不改变，无论多少次访问 `publishedBooksMessage` 都会立即返回先前的计算结果，而不用重复执行 `getter` 函数。

❗❗❗ 这也意味着下面的计算属性永远不会更新，因为 `Date.now()` 并不是一个响应式依赖：

```
computed: {
  now() {
    return Date.now()
  }
}
```

相比之下，方法调用总是会在重渲染发生时再次执行函数。

为什么需要缓存呢？想象一下我们有一个非常耗性能的计算属性 `list`，需要循环一个巨大的数组并做许多计算逻辑，并且可能也有其他计算属性依赖于 `list`。没有缓存的话，我们会重复执行非常多次 `list` 的计算函数，然而这实际上没有必要！如果你确定不需要缓存，那么也可以使用方法调用。

### 可写计算属性

计算属性默认仅能通过计算函数得出结果。当你尝试修改一个计算属性时，你会收到一个运行时警告。只在某些特殊场景中你可能才需要用到“可写”的属性，你可以通过同时提供 getter 和 setter 来创建：

```
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        // 注意：我们这里使用的是解构赋值语法
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  }
}
```

现在当你再运行 `this.fullName = 'John Doe'` 时，`setter` 会被调用而 `this.firstName` 和 `this.lastName` 会随之更新。

### 最佳实践

> 计算函数不应有副作用
> 计算属性的计算函数应只做计算而没有任何其他的副作用，这一点非常重要，请务必牢记。举个例子，不要在计算函数中做异步请求或者更改 `DOM`！一个计算属性的声明中描述的是如何根据其他值派生一个值。因此计算函数的职责应该仅为计算和返回该值。在之后的指引中我们会讨论如何使用监听器根据其他响应式状态的变更来创建副作用。

> 避免直接修改计算属性值
> 从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。

## Class 与 Style 绑定

数据绑定的一个常见需求场景是操纵元素的 `CSS class` 列表和内联样式。因为它们都是 `attribute`，我们可以使用 `v-bind` 来做这件事：我们只需要通过表达式计算出一个字符串作为最终结果即可。然而频繁地连接字符串让人很闹心，也很容易出错。因此，`Vue` 专门为 `class` 和 `style` 的 `v-bind` 用法提供了特殊的功能增强。除了字符串外，表达式的结果还可以是对象或数组。

### 绑定 HTML class

> 绑定对象

我们可以给 `:class` (`v-bind:class` 的缩写) 传递一个对象来动态切换 `class：`

```
<div :class="{ active: isActive }"></div>
```

上面的语法表示 `active` 是否存在取决于数据属性 `isActive` 的真假值。

你可以在对象中写多个字段来操作多个 `class`。此外，`:class` 指令也可以和一般的 `class attribute` 共存。所以可以有下面这样的状态：

```
data() {
  return {
    isActive: true,
    hasError: false
  }
}
```

使用的模板如下：

```
<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>
```

它将会被渲染成：

```
<div class="static active"></div>
```

当 `isActive` 或者 `hasError` 改变时，`class` 列表会随之更新。举个例子，如果 `hasError` 变为 `true`，`class` 列表也会变成 `"static active text-danger"`。

绑定的对象也不一定写成内联的形式：

```
data() {
  return {
    classObject: {
      active: true,
      'text-danger': false
    }
  }
}
```

```
<div :class="classObject"></div>
```

这也会渲染出相同的结果。我们也可以绑定一个返回对象的计算属性。这才是一个通用且好用的实践。🚀🚀🚀

```
data() {
  return {
    isActive: true,
    error: null
  }
},
computed: {
  classObject() {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```

```
<div :class="classObject"></div>
```

> 绑定数组

我们可以给 `:class` 绑定一个数组以应用一系列 `CSS class`：

```
data() {
  return {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
}
```

```
<div :class="[activeClass, errorClass]"></div>
```

渲染的结果是：

```
<div class="active text-danger"></div>
```

如果你也想在数组中按条件触发某个 `class`，你可以使用三元表达式：

```
<div :class="[isActive ? activeClass : '', errorClass]"></div>
```

`errorClass` 会一直存在，但 `activeClass` 只会在 `isActive` 为真时才存在。
然而，这可能在有多个依赖条件的 `class` 时会有些冗长。因此也可以在数组中使用对象语法：

```
<div :class="[{ active: isActive }, errorClass]"></div>
```

> 和组件配合(本节假设你已经有 Vue 组件的知识基础。如果没有，你也可以暂时跳过，以后再阅读。)

对于只有一个根元素的组件，当你使用了 `class attribute` 时，这些 `class` 会被添加到根元素上，并与该元素上已有的 `class` 合并。
举个例子，如果你声明了一个组件名叫 `my-component`，模板如下：

```
<!-- 子组件模板 -->
<p class="foo bar">Hi!</p>
```

在使用时添加一些 `class：`

```
<!-- 在使用组件时 -->
<my-component class="baz boo"></my-component>
```

渲染出的 `HTML` 为：🚀🚀🚀

```
<p class="foo bar baz boo">Hi</p>
```

`Class` 的绑定也是同样的：

```
<my-component :class="{ active: isActive }"></my-component>
```

当 `isActive` 为真时，被渲染的 `HTML` 会是：

```
<p class="foo bar active">Hi</p>
```

如果你的组件有多个根元素，你将需要指定哪个根元素来接收这个 `class`。你可以通过组件的 `$attrs property` 来实现指定：⭐⭐⭐

```
<!-- my-component 模板使用 $attrs 时 -->
<p :class="$attrs.class">Hi!</p>
<span>This is a child component</span>
```

```
<my-component class="baz"></my-component>
```

这将被渲染为：

```
<p class="baz">Hi!</p>
<span>This is a child component</span>
```

你可以在透传 `Attribute` 一章中学习到更多组件的 `attribute` 继承的细节。

### 绑定内联样式

1. 绑定对象

`:style` 支持绑定 `JavaScript` 对象值，对应的是 `HTML` 元素的 `style` 属性：

```
data() {
  return {
    activeColor: 'red',
    fontSize: 30
  }
}
```

```
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

尽管推荐使用 `camelCase`，但 `:style` 也支持 `kebab-cased` 形式的 `CSS` 属性 `key` (对应其 `CSS` 中的实际名称)，举个例子：

```
<div :style="{ 'font-size': fontSize + 'px' }"></div>
```

直接绑定一个样式对象通常是一个好主意，这样可以使模板更加简洁：

```
data() {
  return {
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  }
}
```

```
<div :style="styleObject"></div>
```

同样的，如果样式对象需要更复杂的逻辑，也可以使用返回样式对象的计算属性。

2. 绑定数组
   我们还可以给 `:style` 绑定一个包含多个样式对象的数组。这些对象会被合并和应用到同一元素上：

```
<div :style="[baseStyles, overridingStyles]"></div>
```

3. 自动前缀
   当你在 `:style` 中使用了需要浏览器特殊前缀的 `CSS` 属性时，`Vue` 会自动为他们加上相应的前缀。`Vue` 是在运行时检查该属性是否支持在当前浏览器中使用。如果浏览器不支持某个属性，那么将测试加上各个浏览器特殊前缀，以找到哪一个是被支持的。

4. 样式多值
   你可以对一个样式属性提供多个 (不同前缀的) 值，举个例子：

```
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

数组仅会渲染浏览器支持的最后一个值。在这个示例中，在支持不需要特别加前缀的浏览器中都会渲染为 `display: flex` 的弹性盒子。

## 条件渲染

### `v-if`

`v-if` 指令被用于按条件渲染一个区块。这个区块只会在指令的表达式为真时才被渲染。

```
<h1 v-if="awesome">Vue is awesome!</h1>
```

### `v-else`

你也可以使用 `v-else` 为 `v-if` 添加一个“else 区块”。

```
<button @click="awesome = !awesome">Toggle</button>

<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

一个 `v-else` 元素必须跟在一个 `v-if` 或者 `v-else-if` 元素后面，否则将不会识别它。

### `v-else-if`

顾名思义，`v-else-if` 提供的是相应于 `v-if` 的“else if 区块”。它可以连续多次重复使用：

```
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

和 `v-else` 相似，一个使用 `v-else-if` 的元素必须紧跟在一个 `v-if` 或一个 `v-else-if` 元素后面。

### `<template>` 上的 `v-if`

因为 `v-if` 是一个指令，他必须依附于某个元素。但如果我们想要切换不止一个元素呢？在这种情况下我们可以在一个 `<template>` 元素上使用 `v-if`，这只是一个不可见的包装器元素，最后渲染的结果并不会包含这个 `<template>` 元素。

```
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

`v-else` 和 `v-else-if` 也可以在 `<template>` 上使用。

### `v-show`

另一个可以用来按条件显示一个元素的指令是 `v-show`。其用法基本一样：

```
<h1 v-show="ok">Hello!</h1>
```

不同之处在于 `v-show` 会在 `DOM` 渲染中保留该元素；`v-show` 仅切换了该元素上名为 `display` 的 `CSS` 属性。⭐⭐⭐
`v-show` 不支持在 `<template>` 元素上使用，也没有 `v-else` 来配合。🌙🌙🌙

### `v-if` 与 `v-show`

`v-if` 是“真实的”按条件渲染，因为它确保了条件区块内的事件监听器和子组件都会在切换时被销毁与重建。
`v-if` 也是懒加载的：如果在初次渲染时条件值为 `false`，则不会做任何事。条件区块会直到条件首次变为 `true` 时才渲染。
相比之下，`v-show` 简单许多，元素无论初始条件如何，始终会被渲染，仅作 `CSS class` 的切换。

### `v-if` 和 `v-for`

警告:同时使用 `v-if` 和 `v-for` 是不推荐的，因为这样二者的优先级不明显。[请查看风格指南获得更多信息](https://staging-cn.vuejs.org/style-guide/#avoid-v-if-with-v-for-essential)。
当 `v-if` 和 `v-for` 同时存在于一个元素上的时候，v-if 会首先被执行。[请查看列表渲染指南获取更多细节](https://staging-cn.vuejs.org/guide/essentials/list.html#v-for-with-v-if)。

## 列表渲染

### `v-for` 🎄🎄🎄

1. 我们可以使用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令需要一种特殊的语法形式 `item in items`，其中 `items` 是源数据的数组，而 `item` 是迭代项的别名：

```
data() {
  return {
    items: [{ message: 'Foo' }, { message: 'Bar' }]
  }
}
```

```
<li v-for="item in items">
  {{ item.message }}
</li>
```

2. 在 `v-for` 块中可以完整地访问父作用域内的 `property`。`v-for` 也支持使用可选的第二个参数(`index`)表示当前项的位置索引。⭐⭐⭐

```
data() {
  return {
    parentMessage: 'Parent',
    items: [{ message: 'Foo' }, { message: 'Bar' }]
  }
}
```

```
<li v-for="(item, index) in items">
  {{ parentMessage }} - {{ index }} - {{ item.message }}
</li>
```

3. `v-for` 变量的作用域和下面的 JavaScript 代码很类似：

```
const parentMessage = 'Parent'
const items = [
  /* ... */
]

items.forEach((item, index) => {
  // 可以访问外层的 `parentMessage`
  // 而 `item` 和 `index` 只在这个作用域可用
  console.log(parentMessage, item.message, index)
})
```

注意 `v-for` 是如何对应 `forEach` 回调的函数签名的。实际上，你也可以在定义 `v-for` 的变量别名时使用解构，和解构函数参数类似：

```
<li v-for="{ message } in items">
  {{ message }}
</li>

<!-- 有 index 索引时 -->
<li v-for="({ message }, index) in items">
  {{ message }} {{ index }}
</li>
```

对于多层嵌套的 `v-for`，作用域的工作方式和函数的作用域很类似。每个 `v-for` 作用域都可以访问到父级作用域：

```
<li v-for="item in items">
  <span v-for="childItem in item.children">
    {{ item.message }} {{ childItem }}
  </span>
</li>
```

你也可以使用 `of` 作为分隔符来替代 `in`，这也和 `JavaScript` 的迭代器语法非常相似：

```
<div v-for="item of items"></div>
```

4. `v-for`与对象 ⭐⭐⭐
   你也可以使用 `v-for` 来遍历一个对象的所有属性。

```
data() {
  return {
    myObject: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
}
```

```
<ul>
  <li v-for="value in myObject">
    {{ value }}
  </li>
</ul>
```

你也可以提供第二个参数表示属性名 (例如 `key`)🚀：

```
<li v-for="(value, key) in myObject">
  {{ key }}: {{ value }}
</li>
```

第三个参数表示位置索引 🚀：

```
<li v-for="(value, key, index) in myObject">
  {{ index }}. {{ key }}: {{ value }}
</li>
```

❗ 注意：
当遍历一个对象时，顺序是依据 `Object.keys()` 的枚举顺序，由于不同的 `JavaScript` 引擎可能会有不同的实现，所以顺序可能会不一致。

5. 在 `v-for` 里使用值范围
   可以直接传给 `v-for` 一个整数值。在这种用例中，会将该模板基于 `1...n` 的取值范围重复多次。
   `<span v-for="n in 10">{{ n }}</span>`
   注意此处 `n` 的初值是从 `1` 开始而非 `0`。

6. `<template>` 上的 `v-for`
   与模板上的 `v-if` 类似，你也可以在 `<template>` 标签上使用 `v-for` 来渲染一个包含多个元素的块。例如：

```
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

7. `v-for`与`v-if`
   注意:同时使用 `v-if` 和 `v-for` 是不推荐的，[参考上一章](#v-if-和-v-for)。
   当它们同时存在于一个节点上时，`v-if` 比 `v-for` 的优先级更高。这意味着 `v-if` 的条件将无法访问到 `v-for` 作用域内定义的变量别名：

```
<!--
 这会抛出一个错误，因为属性 todo 此时
 没有在该实例上定义
-->
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo.name }}
</li>
```

在外新包装一层 `<template>` 再在其上使用 `v-for` 可以解决这个问题 (这也更加明显易读)：

```
<template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>
```

### 通过 key 管理状态

`Vue` 默认按照“就地更新”的策略来更新通过 `v-for` 渲染的元素列表。当数据项的顺序改变时，`Vue` 不会随之移动 `DOM` 元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。

默认模式是高效的，但只适用于列表渲染输出不依赖子组件状态或者临时 `DOM` 状态 (例如表单输入值)。

为了给 `Vue` 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，你需要为每个项目提供一个唯一的 `key` `attribute：`

```
<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>
```

当你使用 `<template v-for>` 时，`key` 应该被放置在这个 `<template>` 容器上：

```
<template v-for="todo in todos" :key="todo.name">
  <li>{{ todo.name }}</li>
</template>
```

❗❗❗ 注意：key 在这里是一个通过 v-bind 绑定的特殊 attribute。请不要和在 v-for 中使用对象里所提到的对象 property key 相混淆。
推荐在任何可行的时候为 `v-for` 提供一个 `key attribute`，除非所迭代的 `DOM` 内容非常简单 (例如：不包含组件或有状态的 `DOM` 元素)，或者有意依赖默认行为来获得性能增益。

`key` 绑定的值期望是一个基础类型的值，例如字符串或 `number` 类型。不要用对象作为 `v-for` 的 `key`。要获取 `key attribute` 的更多用途细节，请看 [key API 文档](https://staging-cn.vuejs.org/api/built-in-special-attributes.html#key)。

### 组件上使用 `v-for`(这一小节假设你已了解组件的相关知识，或者你也可以先跳过这里，之后再回来看。)

可以直接在组件上使用 `v-for`，和其他任何一般的元素没有区别 (别忘记提供一个 `key`)：

```
<my-component v-for="item in items" :key="item.id"></my-component>
```

但是，这不会自动将任何数据传递给组件，因为组件有自己独立的作用域。为了将迭代后的数据传递到组件中，我们还是应该使用 `prop：`⭐⭐⭐

```
<my-component
  v-for="(item, index) in items"
  :item="item"
  :index="index"
  :key="item.id"
></my-component>
```

不自动将 `item` 注入组件的原因是，这会使组件与 `v-for` 的工作方式紧密耦合。明确其数据的来源可以使组件在其他情况下重用。

一个简单的待办事项列表的例子，展示了如何通过 `v-for` 来渲染一个组件列表，并向每个实例中传入不同的数据。

### 数组变化侦测 ❗❗❗

1. 变更方法
   `Vue` 包装了一批侦听数组的变更方法，以至于这些方法可以触发视图更新。被包装的变更方法如下：

- push()
- pop() 删除数组最后一个元素并返回该元素
- shift() 方法用于把数组的第一个元素从其中删除,并返回第一个元素的值。注意: 此方法改变数组的长度!提示: 移除数组末尾的元素可以使用 pop() 方法。
- unshift() 方法可向数组的开头添加一个或更多元素,并返回新的长度。注意: 该方法将改变数组的数目。提示: 将新项添加到数组末尾,请使用 push() 方法。
- splice() 方法用于添加或删除数组中的元素。注意:这种方法会改变原始数组。返回值如果删除一个元素,则返回一个元素的数组。
- sort() 方法用于对数组的元素进行排序。

排序顺序可以是字母或数字，并按升序或降序。

默认排序顺序为按字母升序。

注意：当数字是按字母顺序排列时"40"将排在"5"前面。

使用数字排序，你必须通过一个函数作为参数来调用。

函数指定数字是按照升序还是降序排列。

这些说起来可能很难理解，你可以通过本页底部实例进一步了解它。

注意： 这种方法会改变原始数组！。

- reverse()

2. 替换一个数组
   变更方法，顾名思义，就是会对调用它们的原数组进行变更。相对地，也有一些非变更方法，例如 `filter()`，`concat()` 和 `slice()`，这些都不会更改原数组，而总是返回一个新数组。当遇到的是非变更方法时，我们需要将旧的数组替换为新的：

```
this.items = this.items.filter((item) => item.message.match(/Foo/))
```

你可能认为这将导致 `Vue` 丢弃现有的 `DOM` 并重新渲染整个列表——幸运的是，情况并非如此。`Vue` 实现了一些巧妙的方法来最大化对 `DOM` 元素的重用，因此用另一个包含部分重叠对象的数组来做替换，仍会是一种非常高效的操作。

3. 展示过滤或排序后的结果
   有时，我们希望显示数组经过过滤或排序后的内容，而不实际变更或重置原始数据。在这种情况下，你可以创建返回已过滤或已排序数组的计算属性。
   举个例子：
   ```
   data() {
   return {
    numbers: [1, 2, 3, 4, 5]
   }
   },
   computed: {
   evenNumbers() {
    return this.numbers.filter(n => n % 2 === 0)
   }
   }
   ```
   ```
   <li v-for="n in evenNumbers">{{ n }}</li>
   ```
   在计算属性不可行的情况下 (例如在多层嵌套的 `v-for` 循环中)，你可以使用以下方法：
   ```
   data() {
   return {
   sets: [[1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
   }
   },
   methods: {
   even(numbers) {
   return numbers.filter(number => number % 2 === 0)
   }
   }
   ```
   ```
     <ul v-for="numbers in sets">
     <li v-for="n in even(numbers)">{{ n }}</li>
   </ul>
   ```
   在计算属性中使用 `reverse()` 和 `sort()` 请保持谨慎！这两个方法将变更原始数组，计算函数中不应该这么做。请在调用这些方法之前创建一个原数组的副本：⭐⭐⭐
   ```
   return [...numbers].reverse()
   ```

## 事件处理

### 监听事件

你可以使用 `v-on` 指令 (简写为 @) 来监听 `DOM` 事件和运行 `JavaScript` 代码。用法：`v-on:click="methodName"` 或 `@click="handler"`。

事件处理器的值可以是：

1. 内联事件处理器：事件被触发时执行的内联 `JavaScript` 语句 (与 `onclick` 类似)。
2. 方法事件处理器：一个组件的属性名、或对某个方法的访问。

### 内联事件处理器

内联事件处理器通常用于简单场景，例如：

```
data() {
  return {
    count: 0
  }
}
```

```
<button @click="count++">Add 1</button>
<p>Count is: {{ count }}</p>
```

### 方法事件处理器

随着事件处理器的逻辑变得愈发复杂，内联代码方式变得不够灵活。因此 `v-on` 也可以接受一个方法名或对某个方法的调用。
举个例子：

```
data() {
  return {
    name: 'Vue.js'
  }
},
methods: {
  greet(event) {
    // 方法中的 `this` 指向当前活跃的组件实例
    alert(`Hello ${this.name}!`)
    // `event` 是 DOM 原生事件
    if (event) {
      alert(event.target.tagName)
    }
  }
}
```

```
<!-- `greet` 是上面定义过的方法名 -->
<button @click="greet">Greet</button>
```

方法事件处理器会自动接收原生 `DOM` 事件并触发执行。在上面的例子中，我们能够通过被触发事件的 `event.target.tagName` 访问到该 `DOM` 元素。

> 方法与内联事件判断
> 模板编译器会通过检查 `v-on` 的值是否是合法的 `JavaScript` 标识符或属性访问来断定是何种形式的事件处理器。举个例子，`foo、foo.bar` 和 `foo['bar']` 会被视为方法事件处理器，而 `foo()` 和 `count++` 会被视为内联事件处理器。

### 在内联处理器中调用方法

除了直接绑定方法名，你还可以在内联事件处理器中调用方法。这允许我们向方法传入自定义参数以代替原生事件：

```
methods: {
  say(message) {
    alert(message)
  }
}
```

```
<button @click="say('hello')">Say hello</button>
<button @click="say('bye')">Say bye</button>
```

### 在内联事件处理器中访问事件参数 ⭐⭐⭐

有时我们需要在内联事件处理器中访问原生 `DOM` 事件。你可以向该处理器方法传入一个特殊的 `$event` 变量，或者使用内联箭头函数：

```
<!-- 使用特殊的 $event 变量 -->
<button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>

<!-- 使用内联箭头函数 -->
<button @click="(event) => warn('Form cannot be submitted yet.', event)">
  Submit
</button>
```

```
methods: {
  warn(message, event) {
    // 这里可以访问 DOM 原生事件
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
```

### 事件修饰符

在处理事件时调用 `event.preventDefault()` 或 `event.stopPropagation()` 是很常见的。尽管我们可以直接在方法内调用，但如果方法能更专注于数据逻辑而不用去处理 `DOM` 事件的细节会更好。
为解决这一问题，`Vue` 为 `v-on` 提供了事件修饰符。修饰符是用点表示的指令后缀。

- .stop
- .prevent
- .self
- .capture
- .once
- .passive

```
<!-- 单击事件将停止传递 -->
<a @click.stop="doThis"></a>

<!-- 提交事件将不再重新加载页面 -->
<form @submit.prevent="onSubmit"></form>

<!-- 修饰语可以使用链式书写 -->
<a @click.stop.prevent="doThat"></a>

<!-- 也可以只有修饰符 -->
<form @submit.prevent></form>

<!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
<!-- 例如：事件处理器不来自子元素 -->
<div @click.self="doThat">...</div>
```

TIP❗❗❗

使用修饰符时需要注意调用顺序，因为相关代码是以相同的顺序生成的。因此使用 `@click.prevent.self` 会阻止元素及其子元素的所有点击事件的默认行为而 `@click.self.prevent` 则只会阻止对元素本身的点击事件的默认行为。

`.capture`、`.once` 和 `.passive` 修饰符与原生 `addEventListener` 事件相同：

```
<!-- 添加事件监听器时，使用 `capture` 捕获模式 -->
<!-- 例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 -->
<div @click.capture="doThis">...</div>

<!-- 点击事件最多被触发一次 -->
<a @click.once="doThis"></a>

<!-- 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成 -->
<!-- 以防其中包含 `event.preventDefault()` -->
<div @scroll.passive="onScroll">...</div>
```

`.passive` 修饰符一般用于触摸事件的监听器，可以用来[改善移动端设备的滚屏性能](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#%E4%BD%BF%E7%94%A8_passive_%E6%94%B9%E5%96%84%E7%9A%84%E6%BB%9A%E5%B1%8F%E6%80%A7%E8%83%BD)。

TIP❗❗❗
请勿同时使用 `.passive` 和 `.prevent`，因为 `.prevent` 会被忽略并且你的浏览器可能会抛出警告。请记住，`.passive` 是向浏览器表明你不想阻止事件的默认行为。并且如果你这样做，可能在浏览器中收到一个警告。

### 按键修饰符

在监听键盘事件时，我们经常需要检查特定的按键。`Vue` 允许在 `v-on` 或 `@` 监听按键事件时添加按键修饰符。

```
<!-- 仅在 `key` 为 `Enter` 时调用 `vm.submit()` -->
<input @keyup.enter="submit" />
```

你可以直接使用 `KeyboardEvent.key` 暴露的按键名称作为修饰符，但需要转为 `kebab-case` 形式。

```
<input @keyup.page-down="onPageDown" />
```

在上面的例子中，仅会在 `$event.key` 为 `'PageDown'` 时调用事件处理。

1. 按键别名
   `Vue` 为一些常用的按键提供了别名：

- .enter
- .tab
- .delete (捕获“Delete”和“Backspace”两个按键)
- .esc
- .space
- .up
- .down
- .left
- .right

2. 系统按键修饰符
   你可以使用以下系统按键修饰符来触发鼠标或键盘事件监听器，只有当按键被按下时才会触发。

- .ctrl
- .alt
- .shift
- .meta

注意 ❗❗❗

在 `Macintosh` 键盘上，meta 是 Command 键 (⌘)。在 `Windows` 键盘上，meta 键是 Windows 键 (⊞)。在 `Sun` 微机系统键盘上，meta 是钻石键 (◆)。在某些键盘上，特别是 MIT 和 Lisp 机器的键盘及其后代版本的键盘，如 Knight 键盘，space-cadet 键盘，meta 都被标记为“META”。在 Symbolics 键盘上，meta 也被标识为“META”或“Meta”。

3. `.exact` 修饰符
   `.exact` 修饰符允许控制触发一个事件所需的确定组合的系统按键修饰符。

```
<!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 仅当没有按下任何系统按键时触发 -->
<button @click.exact="onClick">A</button>
```

3. 鼠标按键修饰符

- .left
- .right
- .middle
  这些修饰符将处理程序限定为由特定鼠标按键触发的事件。

## 表单输入绑定

在前端处理表单时，我们常常需要将表单输入框的内容同步给 `JavaScript` 中相应的变量。手动连接值绑定和更改事件监听器可能会很麻烦：

```
<input
  :value="text"
  @input="event => text = event.target.value">
```

`v-model` 指令帮我们简化了这一步骤：🎄🎄🎄

```
<input v-model="text">
```

另外，`v-model` 还可以用于各种不同类型的输入，`<textarea>`、`<select>` 元素。它会根据所使用的元素自动扩展到不同的 `DOM` 属性和事件组合：

- 文本类型的 `<input>` 和 `<textarea>` 元素会使用到 `value` 属性和 `input` 事件；
- `<input type="checkbox">` 和 `<input type="radio">` 使用 `checked` 属性和 `change` 事件；
- `<select>` 使用的 `value` 作为 `prop，change` 作为事件：

注意

`v-model` 会忽略任何表单元素上初始的 `value、checked` 或 `selected attribute`。它将始终将当前绑定的 `JavaScript` 状态视为数据的正确来源。你应该在 `JavaScript` 中声明该初始值，使用`data` 选项。

1. 基本用法

1.1 文本

```
<p>Message is: {{ message }}</p>
<input v-model="message" placeholder="edit me" />
```

注意

对于需要使用 `IME` 的语言 (中文，日文和韩文等)，你会发现 `v-model` 不会在 `IME` 输入的组合状态时触发更新。如果你的确想在此时也触发更新，请使用 `input` 事件监听器和 `value` 绑定值而不要使用 `v-model`。

1.2 多行文本

```
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```

注意插值表达式在 `<textarea>` 中将不会工作。请使用 `v-model` 来替代。

1.3 复选框
单一的复选框，绑定的是布尔类型值：

```
<input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>
```

我们还可以将多个复选框绑定到同一个数组或集合的值：

```
export default {
  data() {
    return {
      checkedNames: []
    }
  }
}
```

```
<div>Checked names: {{ checkedNames }}</div>

<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>

<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>

<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
```

在这个例子中，`checkedNames` 数组将始终包含来自当前选中框的值。

1.4 单选按钮

```
<div>Picked: {{ picked }}</div>

<input type="radio" id="one" value="One" v-model="picked" />
<label for="one">One</label>

<input type="radio" id="two" value="Two" v-model="picked" />
<label for="two">Two</label>
```

1.5 选择器
单个选择器的示例如下：

```
<div>Selected: {{ selected }}</div>

<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
```

注意 ❗❗❗

如果 `v-model` 表达式的初始值不匹配任何一个选择项，`<select>` 元素会渲染成一个“未选择”的状态。在 `iOS` 上，这将导致用户无法选择第一项，因为 `iOS` 在这种情况下不会触发一个 `change` 事件。因此，我们建议提供一个空值的禁用选项，如上面的例子所示。

多选 (值绑定到一个数组)：

```
<div>Selected: {{ selected }}</div>

<select v-model="selected" multiple>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
```

选择器的选项可以使用 `v-for` 动态渲染：

```
export default {
  data() {
    return {
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  }
}
```

```
<select v-model="selected">
  <option v-for="option in options" :value="option.value">
    {{ option.text }}
  </option>
</select>

<div>Selected: {{ selected }}</div>
```

1.6 值绑定
对于单选按钮，复选框和选择器选项，`v-model` 绑定的值通常是静态的字符串 (或者对复选框是布尔值)：

```
<!-- `picked` 在被选择时是字符串 "a" -->
<input type="radio" v-model="picked" value="a" />

<!-- `toggle` 只会为 true 或 false -->
<input type="checkbox" v-model="toggle" />

<!-- `selected` 在第一项被选中时为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

但有时我们可能希望将该值绑定到当前活动实例上的动态属性，那么可以使用 `v-bind` 来做到。此外使用 `v-bind` 还使我们可以将选项值绑定为非字符串类型。🚀🌙❗⭐🎄

> 复选框

```
<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no" />
```

`true-value` 和 `false-value` 是 `Vue` 特有的 `attributes` 且仅会在 `v-model` 存在时工作。这里 `toggle` 属性的值会在选中时被设为 `'yes'`，取消选择时设为 `'no'`。你同样可以通过 `v-bind` 将其绑定为其他动态值：

```
<input
  type="checkbox"
  v-model="toggle"
  :true-value="dynamicTrueValue"
  :false-value="dynamicFalseValue" />
```

提示 ❗❗❗

`true-value` 和 `false-value attributes` 不会影响 `value attribute`，因为浏览器在表单提交时，并不会包含未选择的复选框。为了保证这两个值 (例如：`“yes”`和`“no”`) 的其中之一被表单提交，请使用单选按钮作为替代。

> 单选按钮

```
<input type="radio" v-model="pick" :value="first" />
<input type="radio" v-model="pick" :value="second" />
```

`pick` 会在第一个按钮选中时被设为 `first`，在第二个按钮选中时被设为 `second`。

> 选择器选项

```
<select v-model="selected">
  <!-- 内联对象字面量 -->
  <option :value="{ number: 123 }">123</option>
</select>
```

`v-model` 同样也支持非字符串类型的值绑定！在上面这个例子中，当某个选项被选中，`selected` 会被设为该对象字面量值 `{ number: 123 }`。

1.7 修饰符

`.lazy` :
默认情况下，`v-model` 会在每次 `input` 事件后更新数据 (IME composition 阶段的状态例外)。你可以添加 `lazy` 修饰符来改为在每次 `change` 事件后更新数据：

```
<!-- 在 "change" 事件后同步更新而不是 "input" -->
<input v-model.lazy="msg" />
```

`.number` :
如果你想让用户输入自动转换为数字，你可以在 `v-model` 后添加 `.number` 修饰符来管理输入：

```
<input v-model.number="age" />
```

如果该值无法被 `parseFloat()` 处理，那么将返回原始值。

`number` 修饰符会在输入框有 `type="number"` 时自动应用。

`.trim` :
如果你想要默认自动去除用户输入内容中两端的空格，你可以在 `v-model` 后添加 `.trim`修饰符来管理输入：

```
<input v-model.trim="msg" />
```

1.8 组件上的 `v-model`
`HTML` 的内置表单输入类型并不总能满足你的需求。幸运的是，你可以使用 `Vue` 构建具有完全自定义行为的可复用输入组件，并且这些输入组件也可以使用 `v-model`！要了解更多关于此的内容，请在组件指引中阅读[配合 v-model 使用](https://staging-cn.vuejs.org/guide/components/events.html#usage-with-v-model)。

## 生命周期钩子

每个 `Vue` 组件实例在创建时都需要经历一系列的初始化步骤，比如设置好数据侦听，编译模板，挂载实例到 `DOM` 以及数据改变时更新 `DOM`。在此过程中，它也会运行称为生命周期钩子的函数，让开发者有机会在特定阶段添加自己的代码。

### 注册周期钩子

举个例子，`mounted` 钩子可以用来在组件完成初始渲染并创建 `DOM` 节点后运行代码。

```
export default {
  mounted() {
    console.log(`the component is now mounted.`)
  }
}
```

还有其他一些钩子，会在实例生命周期的不同阶段被调用，最常用的是 `mounted`，`updated` 和 `unmounted`。

所有生命周期钩子函数的 `this` 上下文都会自动指向当前调用它的组件实例。注意：避免用箭头函数来定义生命周期钩子，因为如果这样的话你将无法在函数中通过 `this` 获取组件实例。

### 生命周期图示

下面是[实例生命周期的图表](https://staging-cn.vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram)。你不需要完全理解当前正在进行的所有事情，但随着你学习和构建更多内容，它将是一个有用的参考。
有关所有生命周期钩子及其各自用例的详细信息，请参考[生命周期钩子 API 手册](https://staging-cn.vuejs.org/api/options-lifecycle.html)。

## 侦听器

### 基本示例

计算属性允许我们声明性地计算推导值。然而，在有些情况下，为了应对一些状态的变化，我们需要运行些“副作用”：例如更改 `DOM`，或者根据异步操作的结果，去修改另一处的状态。

在选项式 `API` 中，我们可以使用 `watch` 选项在每次响应式 `property` 发生变化时触发一个函数。

```
export default {
  data() {
    return {
      question: '',
      answer: 'Questions usually contain a question mark. ;-)'
    }
  },
  watch: {
    // 每当 question 改变时，这个函数就会执行
    question(newQuestion, oldQuestion) {
      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer()
      }
    }
  },
  methods: {
    async getAnswer() {
      this.answer = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
      }
    }
  }
}
```

```
<p>
  Ask a yes/no question:
  <input v-model="question" />
</p>
<p>{{ answer }}</p>
```

`watch` 选项也支持把键设置成用点号分隔的路径：

```
export default {
  watch: {
    // 注意：只能是简单的路径，不支持表达式。
    'some.nested.key'(newValue) {
      // ...
    }
  }
}
```

### 深层侦听器 ⭐⭐⭐

`watch` 默认是浅层的：被侦听的 `property`，仅在被赋新值时，才会触发回调函数——而嵌套 `property` 的变化不会触发。如果想侦听所有嵌套的变更，你需要深层侦听器：

```
export default {
  watch: {
    someObject: {
      handler(newValue, oldValue) {
      },
      deep: true
    }
  }
}
```

谨慎使用

深度侦听需要遍历被侦听对象中的所有嵌套的 `property`，当用于大型数据结构时，开销很大。因此请只在必要时才使用它，并且要留意性能。

### 即时回调的侦听器

`watch` 默认是懒侦听的：仅在侦听源变化时，才会执行回调。但在某些场景中，我们希望在创建侦听器时，立即执行一遍回调。举个例子，我们想请求一些初始数据，然后在相关状态更改时重新请求数据。

我们可以用一个对象来声明侦听器，这个对象有 handler 方法和 immediate: true 选项，这样便能强制回调函数立即执行：

```
export default {
  // ...
  watch: {
    question: {
      handler(newQuestion) {
        // 在组件实例创建时会立即调用
      },
      // 强制立即执行回调
      immediate: true
    }
  }
  // ...
}
```

### 回调的刷新时机

当你更改了响应式状态，它可能会同时触发 `Vue` 组件更新和侦听器回调。

默认情况下，用户创建的侦听器回调，都会在 `Vue` 组件更新之前被调用。这意味着你在侦听器回调中访问的 `DOM` 将是被 `Vue` 更新之前的状态。

如果想在侦听器回调中能访问被 `Vue` 更新之后的`DOM`，你需要指明 `flush: 'post'` 选项：

```
export default {
  // ...
  watch: {
    key: {
      handler() {},
      flush: 'post'
    }
  }
}
```

### `this.$watch()`

我们也可以使用组件实例的 `$watch()` 方法来命令式地创建一个侦听器：

```
export default {
  created() {
    this.$watch('question', (newQuestion) => {
      // ...
    })
  }
}
```

如果要在特定条件下设置一个侦听器，或者只侦听响应用户交互的内容，这方法很有用。它还允许你提前停止该侦听器。

### 停止侦听器

用 `watch` 选项或者 `$watch()` 实例方法声明的侦听器，会在宿主组件卸载时自动停止。因此，在大多数场景下，你无需关心怎么停止它。

在少数情况下，你的确需要在组件卸载之前就停止一个侦听器，这时可以调用 `$watch() API` 返回的函数：

```
const unwatch = this.$watch('foo', callback)

// ...当该侦听器不再需要时
unwatch()
```

## 模板 ref

虽然 `Vue` 的声明性渲染模型为你抽象了大部分对 `DOM` 的直接操作，但在某些情况下，我们仍然需要直接访问底层 `DOM` 元素。要实现这一点，我们可以使用特殊的 `ref attribute`：

```
<input ref="input">
```

`ref` 是一个特殊的 `attribute`，和 `v-for` 章节中提到的 `key` 类似。它允许我们在一个特定的 `DOM` 元素或子组件实例被挂载后，获得对它的直接引用。这可能很有用，比如说在组件挂载时编程式地聚焦到一个 `input` 元素上，或在一个元素上初始化一个第三方库。

### 访问模板 ref

挂载结束后 `ref` 都会被暴露在 `this.$refs` 之上：

```
<script>
export default {
  mounted() {
    this.$refs.input.focus()
  }
}
</script>

<template>
  <input ref="input" />
</template>
```

注意，你只可以在组件挂载后才能访问 `ref`。如果你想在模板中的表达式上访问 `$refs.input`，在初次渲染时会是 `null`。这是因为在初次渲染前这个元素还压根不存在呢！❗❗❗

### `v-for` 中的 `ref`

当 `ref` 在 `v-for` 中使用时，相应的 `ref` 中包含的值是一个数组：

```
<script>
export default {
  data() {
    return {
      list: [
        /* ... */
      ]
    }
  },
  mounted() {
    console.log(this.$refs.items)
  }
}
</script>

<template>
  <ul>
    <li v-for="item in list" ref="items">
      {{ item }}
    </li>
  </ul>
</template>
```

应该注意的是，`ref` 数组不能保证与源数组相同的顺序。❗❗❗

### 函数型 ref ⭐⭐⭐

除了使用字符串值作名字，`ref attribute` 还可以绑定为一个函数，会在每次组件更新时都被调用。函数接受该元素引用作为第一个参数：

```
<input :ref="(el) => { /* 将 el 分配给 property 或 ref */ }">
```

如果你正在使用一个动态的 `:ref` 绑定，我们也可以传一个函数。当元素卸载时，这个 `el` 参数会是 `null`。你当然也可以使用一个方法而不是内联函数。

### 组件上的 ref

`ref` 也可以被用在一个子组件上。此时 `ref` 中引用的是组件实例：

```
<script>
import Child from './Child.vue'

export default {
  components: {
    Child
  },
  mounted() {
    // this.$refs.child 是 <Child /> 组件的实例
  }
}
</script>

<template>
  <Child ref="child" />
</template>
```

如果一个子组件使用的是选项式 API ，被引用的组件实例和该子组件的 `this` 完全一致，这意味着父组件对子组件的每一个属性和方法都有完全的访问权。这使得在父组件和子组件之间创建紧密耦合的实现细节变得很容易，当然也因此，应该只在绝对需要时才使用组件引用。大多数情况下，你应该首先使用标准的 `props` 和 `emit` 接口来实现父子组件交互。❗❗❗

`expose` 选项可以用于限制对子组件实例的访问：🌙🌙🌙

```
export default {
  expose: ['publicData', 'publicMethod'],
  data() {
    return {
      publicData: 'foo',
      privateData: 'bar'
    }
  },
  methods: {
    publicMethod() {
      /* ... */
    },
    privateMethod() {
      /* ... */
    }
  }
}
```

在上面这个例子中，父组件通过模板 `ref` 访问到子组件实例后，仅能访问 `publicData` 和 `publicMethod`。

## 组件基础 🌙🌙🌙
组件允许我们将 `UI` 划分为独立的、可重用的部分来思考。组件在应用程序中常常被组织成层层嵌套的树状结构：
这和我们嵌套 `HTML` 元素的方式类似，`Vue` 实现了自己的组件数据模型，使我们可以在每个组件内封装自定义内容与逻辑。`Vue` 同样也能很好地配合原生 `Web Component`。如果你想知道 `Vue` 组件与原生 `Web Components` 之间的关系，[可以阅读此章节](https://staging-cn.vuejs.org/guide/extras/web-components.html)。

### 定义一个组件
当使用构建步骤时，我们一般会将 `Vue` 组件定义在一个单独的 `.vue` 文件中，这被叫做单文件组件 (简称 `SFC`)：
```
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
```
当不使用构建步骤时，一个 `Vue` 组件以一个包含 `Vue` 特定选项的 `JavaScript` 对象来定义：
```
export default {
  data() {
    return {
      count: 0
    }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
}
```
这里的模板是一个内联的 `JavaScript` 字符串，`Vue` 将会在运行时编译它。你也可以使用 `ID` 选择器来指向一个元素 (通常是原生的 `<template>` 元素)，`Vue` 将会使用其内容作为模板来源。

上面的例子中定义了一个组件，并在一个 `.js` 文件里默认导出了它自己，但你也可以通过具名导出在一个文件中导出多个组件。

### 使用组件
TIP

我们会在接下来的指引中使用 `SFC` 语法，无论你是否使用构建步骤，组件相关的概念都是相同的。示例一节中展示了两种场景中的组件使用情况。

要使用一个子组件，我们需要在父组件中导入它。假设我们把计数器组件放在了一个叫做 ButtonCounter.vue 的文件中，这个组件将会以默认导出的形式被暴露给外部。
```
<script>
import ButtonCounter from './ButtonCounter.vue'

export default {
  components: {
    ButtonCounter
  }
}
</script>

<template>
  <h1>Here is a child component!</h1>
  <ButtonCounter />
</template>
```
若要将导入的组件暴露给模板，我们需要在 `components` 选项上注册它。这个组件将会以其注册时的名字作为模板中的标签名。

当然，你也可以全局地注册一个组件，使得它在当前应用中的任何组件上都可以使用，而不需要额外再导入。关于组件的全局注册和局部注册两种方式利弊的讨论，我们放在了组件注册这一章节中讨论。

组件可以被重用任意多次：
```
<h1>Here is a child component!</h1>
<ButtonCounter />
<ButtonCounter />
<ButtonCounter />
```
你会注意到，每当点击这些按钮时，每一个组件都维护着自己的状态，是不同的 `count`。这是因为每当你使用一个组件，就创建了一个新的实例。

在单文件组件中，推荐为子组件使用 `PascalCase` 的标签名，以此来和原生的 `HTML` 元素作区分。虽然原生 `HTML` 标签名是不区分大小写的，但 `Vue` 单文件组件是可以在编译中区分大小写的。我们也可以使用 /> 来关闭一个标签。

如果你是直接在 `DOM` 中书写模板 (例如原生 `<template>` 元素的内容)，模板的编译将服从于原生 `HTML` 的解析行为。在这种情况下，你应该需要使用 `kebab-case` 形式并显式地关闭这些组件的标签。

```
<!-- 如果是在 DOM 中书写该模板 -->
<button-counter></button-counter>
<button-counter></button-counter>
<button-counter></button-counter>
```
### 传递 props 
如果我们正在构建一个博客，我们可能需要一个表示博客文章的组件。我们希望所有的博客文章分享相同的视觉布局，但有不同的内容。要实现这样的效果自然必须向组件中传递数据，例如每篇文章标题和内容，这就会使用到 `props`。

`Props` 是一种特别的 `attributes`，你可以在组件上声明注册。要传递给博客文章组件一个标题，我们必须在组件的 `props` 列表上声明它，使用 `props` 选项：
```
<!-- BlogPost.vue -->
<script>
export default {
  props: ['title']
}
</script>

<template>
  <h4>{{ title }}</h4>
</template>
```
当一个值被传递给 `prop` 时，它将成为该组件实例上的一个属性。该属性的值可以像其他组件属性一样，在模板和组件的 `this` 上下文中访问。

一个组件可以有任意多的 `props`，默认情况下，任何值都可以传递给任何 `prop`。

当一个 `prop` 被注册后，可以像这样以自定义 `attribute` 的形式传递数据给它：
```
<BlogPost title="My journey with Vue" />
<BlogPost title="Blogging with Vue" />
<BlogPost title="Why Vue is so fun" />
```
然而在某些应用中，你也许在父组件中有如下的一个博客文章数组：
```
export default {
  // ...
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    }
  }
}
```
则可以使用 `v-for` 来渲染它们：
```
<BlogPost
  v-for="post in posts"
  :key="post.id"
  :title="post.title"
 />
```
请注意这里我们是怎么使用 `v-bind` 来传递动态 `props` 的。当事先不知道要渲染的确切内容时，这一点特别有用。

以上就是关于 `props`，目前你需要了解的所有知识了，但当你顺利地完成了本页的阅读后，如果还想知道更多细节，我们推荐你继续阅读关于 [props 的完整指引](https://staging-cn.vuejs.org/guide/components/props.html)。

### 监听事件
继续开发我们的`<BlogPost>` 组件，我们会发现有时候需要与父组件进行交互。例如，要在此处实现 A11y 的需求，将博客文章的文字能够放大，而页面的其余部分仍使用默认字号。

在父组件中，我们可以添加一个 postFontSize 数据 property 来实现这个效果：
```
data() {
  return {
    posts: [
      /* ... */
    ],
    postFontSize: 1
  }
}
```
可以在模板中用来控制所有博客文章的字体大小：
```
<div :style="{ fontSize: postFontSize + 'em' }">
  <BlogPost
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
   />
</div>
```
现在，让我们给 `<BlogPost>` 组件添加一个按钮：
```
<!-- BlogPost.vue, 省略了 <script> -->
<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button>Enlarge text</button>
  </div>
</template>
```
这个按钮目前还没有做任何事情，我们想要点击这个按钮来告诉父组件它应该放大所有博客文章的文字。要解决这个问题，组件实例提供了一个自定义事件系统。父组件可以通过 `v-on` 或 `@` 来选择性地监听子组件上抛的事件，就像监听原生 `DOM` 事件那样：
```
<BlogPost
  ...
  @enlarge-text="postFontSize += 0.1"
 />
```
子组件可以通过调用内置的 `$emit` 方法，通过传入事件名称来抛出一个事件：
```
<!-- BlogPost.vue, 省略了 <script> -->
<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>
```
因为有了 `@enlarge-text="postFontSize += 0.1"` 的监听，父组件会接收这一事件，从而更新 `postFontSize` 的值。⭐⭐⭐

我们可以通过 `emits` 选项来选择性地声明需要抛出的事件：
```
<!-- BlogPost.vue -->
<script>
export default {
  props: ['title'],
  emits: ['enlarge-text']
}
</script>
```
这记录了一个组件发出的所有事件，并可选择对其进行[验证](https://staging-cn.vuejs.org/guide/components/events.html#validate-emitted-events)。这还使得 Vue 避免了将它们作为原生事件监听器隐式地应用于子组件的根元素。

以上就是关于组件自定义事件，目前你需要了解的所有知识了。但当你顺利地完成了本页的阅读后，如果还想知道更多细节，我们推荐你继续阅读组件的[自定义事件](https://staging-cn.vuejs.org/guide/components/events.html)。

### 通过插槽来分配内容 🚀🌙❗⭐🎄
和 HTML 元素一样，像这样能够向组件中传递内容是非常有用的：
```
<AlertBox>
  Something bad happened.
</AlertBox>
```

这可以通过 Vue 的自定义 `<slot>` 元素来实现：
```
<template>
  <div class="alert-box">
    <strong>This is an Error for Demo Purposes</strong>
    <slot />
  </div>
</template>

<style scoped>
.alert-box {
  /* ... */
}
</style>
```
正如你上面所看到的，我们使用 `<slot>` 作为一个占位符，之后的内容就会放在这里。
以上就是关于插槽，目前你需要了解的所有知识了。但当你顺利地完成了本页的阅读后，如果还想知道更多细节，我们推荐你继续阅读组件的[插槽](https://staging-cn.vuejs.org/guide/components/slots.html)。

### 动态组件⭐⭐⭐
有的需求会想要在两个组件间来回切换，比如 `Tab` 界面：
上面的例子是通过 `Vue` 的 `<component>` 元素和特殊的 `is` `attribute` 实现的：
```
<!-- currentTab 改变时组件也改变 -->
<component :is="currentTab"></component>
```
在上面的例子中，被传给 `:is` 的值可以是以下几种：

- 被注册的组件名
- 导入的组件对象

你也可以使用 `is` `attribute` 来创建一般的 `HTML` 元素。

当使用 `<component :is="...">` 来在多个组件间作切换时，组件会在被切换掉后卸载。我们可以通过 `<KeepAlive>` 组件强制不活跃的组件仍然保持“存活”的状态。

### DOM 模板解析注意事项⭐⭐⭐
如果你想在 DOM 中直接书写 Vue 模板，Vue 则必须从 DOM 中获取模板字符串。因为浏览器的原生 HTML 解析行为，因此有一些需要注意的事项。
TIP

请注意下面讨论只适用于直接在 DOM 中编写模板的情况。如果你使用来自以下来源的字符串模板，它们不适用：

- 单文件组件
- 内联模板字符串 (例如 template: '...')
- `<script type="text/x-template">`

1. 大小写区分
`HTML` 标签和属性名称是不分大小写的，所以浏览器会把任何大写的字符解释为小写。这意味着当你使用 `DOM` 内的模板时，无论是 `PascalCase` 形式的组件名称、`camelCase` 形式的 `prop` 名称还是 `v-on` 的事件名称，都需要转换为相应等价的 `kebab-case` (短横线连字符) 形式：
```
// JavaScript 中的 camelCase
const BlogPost = {
  props: ['postTitle'],
  emits: ['updatePost'],
  template: `
    <h3>{{ postTitle }}</h3>
  `
}
```
```
<!-- HTML 中的 kebab-case -->
<blog-post post-title="hello!" @update-post="onUpdatePost"></blog-post>
```
2. 闭合标签
我们在上面的例子中已经使用过了闭合标签 (self-closing tag)：
`<MyComponent />`

这是因为 Vue 的模板解析器将 /> 作为标签关闭的标志，无关其类型。

然而在 DOM 模板中，我们必须显式地写出关闭标签：

`<my-component></my-component>`

这是由于 HTML 只允许一小部分特殊的元素省略其关闭标签，最常见的就是 <input> 和 <img>。对于其他的元素来说，如果你省略了关闭标签，原生的 HTML 解析器会认为开启的标签永远没有结束，用下面这个代码片段举个例子：

```
<my-component /> <!-- 我们想要在这里关闭标签... -->
<span>hello</span>
```
将被解析为：
```
<my-component>
  <span>hello</span>
</my-component> <!-- 但浏览器会在这里关闭标签 -->
```

3. 元素位置限制
某些 HTML 元素对于放在其中的元素类型有限制，例如 `<ul>`，`<ol>`，`<table>` 和 `<select>`，相应的，某些元素仅在放置于特定元素中时才会显示，例如 `<li>`，`<tr>` 和`<option>`。
这将导致在使用带有此类限制元素的组件时出现问题。例如：
```
<table>
  <blog-post-row></blog-post-row>
</table>
```
自定义的组件 `<blog-post-row>` 将作为无效的内容被忽略，因而在最终呈现的输出中造成错误。我们可以使用特殊的 is attribute 作为一种解决方案：
```
<table>
  <tr is="vue:blog-post-row"></tr>
</table>
```
TIP

当使用在原生 HTML 元素上时，is 的值必须加上前缀 vue: 才可以被解析为一个 Vue 组件。这一点是必要的，为了避免和原生的自定义内置元素相混淆。

⭐以上就是你需要了解的关于 DOM 模板解析的所有注意事项，同时也是 Vue 基础部分的所有内容。祝贺你！虽然还有很多需要学习的，但你可以先暂停一下，去用 Vue 构造一些有趣的东西，或者看看一些示例。

完成了本页的阅读后，回顾一下你刚才所学到的知识，如果还想知道更多细节，我们推荐你继续阅读关于组件的完整指引。⭐


## TypeScript

### 搭配 TypeScript 使用 Vue

### TypeScript 与组合式 API

### TypeScript 与选项式 API

## 生产环境部署指南

## 深入响应式系统

## 使用 Vue 的多种方式

## Proxy

🚀🌙❗⭐🎄
