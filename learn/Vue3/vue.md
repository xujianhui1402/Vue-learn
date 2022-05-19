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

### API风格：Vue 的组件可以按两种不同的风格书写：选项式API和组合式API ⭐⭐⭐

- 选项式API：使用选项式 API，我们可以用包含多个选项的对象来描述组件的逻辑，例如`data`、`methods`和`mounted`。选项所定义的属性都会暴露在函数内部的`this`上，它会指向当前的组件实例。
~~~
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
~~~

- 组合式 API ：通过组合式 API，我们可以使用导入的 API 函数来描述组件逻辑。在单文件组件中，组合式 API 通常会与 `<script setup> `搭配使用。这个` setup `attribute 是一个标识，告诉 Vue 需要在编译时进行转换，来减少使用组合式 API 时的样板代码。例如，`<script setup>` 中的导入和顶层变量/函数都能够在模板中直接使用。
~~~
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
~~~
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
- 此命令会在` ./dist `文件夹中为你的应用创建一个生产环境的构建版本。关于将应用上线生产环境的更多内容，请阅读[生产环境部署指南](#生产环境部署指南)。

`yarn create @vitejs/app` 输入项目名称 与 vue模版类型（JS\TS）即可快速创建vite vue3项目！ 

### 不使用构建工具\通过 HTTP 提供服务 可参考Vue3官方文档配置

## 创建一个 Vue 应用 ⭐🚀🎄

### 应用实例

每个 `Vue` 应用都是通过 `createApp` 函数创建一个新的 应用实例：
~~~
import { createApp } from 'vue'

const app = createApp({
  /* 根组件选项 */
})
~~~

### 根组件

我们传入 `createApp` 的对象实际上是一个组件，每个应用都需要一个“根组件”，其他组件将作为其子组件。

如果你使用的是单文件组件，我们可以直接从另一个文件中导入根组件。

~~~
import { createApp } from 'vue'
// 从一个单文件组件中导入根组件
import App from './App.vue'

const app = createApp(App)
~~~

虽然本指南中的许多示例只需要一个组件，但大多数真实的应用都是由一棵嵌套的、可重用的组件树组成的。例如，待办事项应用程序的组件树可能是这样的：
~~~
App (root component)
├─ TodoList
│  └─ TodoItem
│     ├─ TodoDeleteButton
│     └─ TodoEditButton
└─ TodoFooter
   ├─ TodoClearButton
   └─ TodoStatistics
~~~

我们会在指南的后续章节中讨论如何定义和组合多个组件。在那之前，我们得先关注一个组件内到底发生了什么。

### 挂载应用

应用实例必须在调用了 `.mount()` 方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串：

~~~
<div id="app"></div>
~~~

~~~
app.mount('#app')
~~~

应用根组件的内容将会被渲染在容器元素里面。容器元素自己将不会被视为应用的一部分。

`.mount()` 方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。

> DOM 中的根组件模板 
当在未采用构建流程的情况下使用 Vue 时，我们可以在挂载容器中直接书写根组件模板：
~~~
<div id="app">
  <button @click="count++">{{ count }}</button>
</div>
~~~

~~~
import { createApp } from 'vue'

const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})

app.mount('#app')
~~~

当根组件没有设置 template 选项时，Vue 将自动使用容器的 innerHTML 作为模板。

### 应用配置

应用实例会暴露一个 `.config` 对象允许我们配置一些应用级的选项，例如定义一个应用级的错误处理器，它将捕获所有由子组件上抛而未被处理的错误：

~~~
app.config.errorHandler = (err) => {
  /* 处理错误 */
}
~~~

应用实例还提供了一些方法来注册应用范围内可用的资源，例如注册一个组件：

~~~
app.component('TodoDeleteButton', TodoDeleteButton)
~~~

这使得 TodoDeleteButton 在应用的任何地方都是可用的。我们会在指南的后续章节中讨论关于组件和其他资源的注册。你也可以在 API 参考中浏览应用实例 API 的完整列表。

确保在挂载应用实例之前完成所有应用配置！

### 多个应用实例

你不必再受限于一个页面只能拥有一个应用实例。`createApp` API 允许多个 `Vue` 应用共存于同一个页面上，而且每个应用都拥有自己的用于配置和全局资源的作用域

~~~
const app1 = createApp({
  /* ... */
})
app1.mount('#container-1')

const app2 = createApp({
  /* ... */
})
app2.mount('#container-2')
~~~

如果你正在使用 Vue 来增强服务端渲染 HTML，并且只想要 Vue 去控制一个大型页面中特殊的一小部分，应避免将一个单独的 Vue 应用实例挂载到整个页面上，而是应该创建多个小的应用实例，将它们分别挂载到所需的元素上去。

## 模板语法 ⭐🚀🎄⭐🚀🎄⭐🚀🎄

Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法上合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析。

在底层机制中，Vue 会将模板编译成高度优化的 JavaScript 代码。结合响应式系统，当应用状态变更时，Vue 能够智能地推导出需要重新渲染的组件的最少数量，并应用最少的 DOM 操作。

如果你对虚拟 DOM 的概念比较熟悉，并且偏向于 JavaScript 的原始力量，你也可以结合可选的 JSX 支持直接手写渲染函数而不采用模板。但请注意，这将不会享受到和模板同等级别的编译时优化。

### 文本插值

最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)：

~~~
<span>Message: {{ msg }}</span>
~~~

双大括号标签会被替换为相应组件实例中 `msg` property 的值。同时每次 `msg` property 更改时它也会同步更新。

### 原始 HTML

双大括号将会将数据插值为纯文本，而不是 HTML。若想插入 HTML，你需要使用 `v-html` 指令：

~~~
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
~~~

可以发现：上面为文本不是HTML，而下面为HTML

这里我们遇到了一个新的概念。这里看到的 `v-html` attribute 被称为一个指令。指令由 `v-` 作为前缀，表明它们是一些由 `Vue` 提供的特殊 attribuite，你可能已经猜到了，它们将为渲染的 DOM 应用特殊的响应式行为。这里我们做的事情简单来说就是：在当前组件实例上，将此元素的 innerHTML 与 `rawHtml` property 保持同步。

span 的内容将会被替换为 `rawHtml` property 的值，插值为纯 HTML——数据绑定将会被忽略。注意，你不能使用 `v-html` 来拼接组合模板，因为` Vue `不是一个基于字符串的模板引擎。相反，组件更适合作为 UI 重用和组合的基本单元。

❗安全警告
在网站上动态渲染任意 `HTML` 是非常危险的，因为这非常容易造成 `XSS` 漏洞。请仅在内容安全可信时再使用 `v-html`，并且永远不要使用用户提供的 `HTML` 内容。

### Attribute 绑定

双大括号不能在 HTML attributes 中使用。相应的，应该使用 `v-bind` 指令：

~~~
<div v-bind:id="dynamicId"></div>
~~~

`v-bind` 指令指示 `Vue` 将元素的 `id` attribute 与组件的 `dynamicId` property 保持一致。如果绑定的值是 `null` 或者 `undefined`，那么该 attribute 将会从渲染的元素上移除。

> 简写 ⭐🚀🎄

因为 v-bind 非常常用，我们提供了特定的简写语法：

~~~
<div :id="dynamicId"></div>
~~~

开头为 : 的 attribute 可能和一般的 `HTML` attribute 看起来不太一样，但它的确是合法的 attribute 名称字符，并且所有支持 `Vue` 的浏览器都能正确解析它。此外，他们不会出现在最终渲染的标签中。简写语法是可选的，但相信在你了解了它更多的用处后，你应该会更喜欢它。

> 布尔型 Attribute 🚀

布尔型 attribute 依据 `true` / `false` 值来决定 attribute 是否应该存在于该元素上。`disabled` 就是最常见的例子之一。

`v-bind` 在这种场景下的行为略有不同：

~~~
<button :disabled="isButtonDisabled">Button</button>
~~~

当 `isButtonDisabled` 为真值或一个空字符串 (即 `<button disabled="">`) 时，元素会包含这个 `disabled` attribute。而当其为假值时 attribute 将被忽略。

> 动态绑定多个值 🚀

如果你有像这样的一个包含多个 attribute 的 JavaScript 对象：

~~~
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}
~~~

通过不带参数的 `v-bind`，你可以将它们绑定到单个元素上：

~~~
<div v-bind="objectOfAttrs"></div>
~~~

> 使用 JavaScript 表达式 🚀

至此，我们仅在模板中绑定了一些简单的 property 键。但是 `Vue` 实际上在所有的数据绑定中都支持完整的 JavaScript 表达式：

~~~
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div :id="`list-${id}`"></div>
~~~

这些表达式都会被作为 JavaScript ，以组件为作用域解析执行。

在 Vue 模板内，JavaScript 表达式可以被使用在如下场景上：

- 在文本插值中 (双大括号)
- 在任何 Vue 指令 (以 v- 开头的特殊 attribute) attribute 的值中

❗❗❗ 仅支持表达式 ：每个绑定仅支持单一表达式，所以下面的例子都是无效的：
~~~
<!-- 这是一个语句，而非表达式 -->
{{ var a = 1 }}

<!-- 条件控制同样不会工作，请使用三元表达式 -->
{{ if (ok) { return message } }}
~~~

1. 调用函数 可以在绑定的表达式中使用一个组件暴露的方法：
~~~
<span :title="toTitleDate(date)">
  {{ formatDate(date) }}
</span>
~~~
❗❗❗ TIP：绑定在表达式中的方法在组件每次更新时都会被重新调用，因此不应该产生任何副作用，比如改变数据或触发异步操作。

2. 受限的全局访问 🚀🚀

模板中的表达式将被沙盒化，仅能够访问到有限的全局对象列表。该列表中会暴露常用的内置全局对象，比如 `Math` 和 `Date`。

没有显式包含在列表中的全局对象将不能在模板内表达式中访问，例如用户附加在 `window` 上的 property。然而，你也可以自行在 `app.config.globalProperties` 上显式地添加他们，供所有的 `Vue` 表达式使用。

> 指令 

指令是带有 `v-` 前缀的特殊 attribute。`Vue` 提供了许多内置指令，包括上面我们所介绍的 `v-bind` 和 `v-html`。

指令 attribute 的期望值为一个 JavaScript 表达式 (之后要讨论到的 `v-for`、`v-on` 和 `v-slot` 将会是例外)。使用指令是为了在其表达式值变化时响应式地对 `DOM` 应用更新。以 `v-if` 为例：

~~~
<p v-if="seen">Now you see me</p>
~~~

这里，`v-if` 指令会基于表达式 `seen` 的值的真假来移除/插入该 `<p>` 元素。

1. 参数

某些指令会需要一个“参数”，在指令名后通过一个冒号隔开做标识。例如用 `v-bind` 指令来响应式地更新一个 `HTML` attribute：

~~~
<a v-bind:href="url"> ... </a>

<!-- 简写 -->
<a :href="url"> ... </a>
~~~

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

~~~
<!--
注意，参数表达式有一些约束，
参见下面“动态参数值的限制”与“动态参数语法的限制”章节的解释
-->
<a v-bind:[attributeName]="url"> ... </a>

<!-- 简写 -->
<a :[attributeName]="url"> ... </a>
~~~

这里的 `attributeName` 会作为一个 JavaScript 表达式被动态执行，计算得到的值会被用作最终的参数。举个例子，如果你的组件实例有一个数据 property `attributeName`，其值为 "href"，那么这个绑定就等价于 `v-bind:href`。🎄

相似地，你还可以将一个函数绑定到动态的事件名称上：

~~~
<a v-on:[eventName]="doSomething"> ... </a>

<!-- 简写 -->
<a @[eventName]="doSomething">
~~~

在此示例中，当 eventName 的值是 "focus" 时，`v-on:[eventName]` 就等价于 `v-on:focus`。🎄

3. 动态参数值的限制 ❗❗❗

动态参数期望结果为一个字符串，或者是 `null`。特殊值 `null` 意为显式移除该绑定。任何其他非字符串的值都将触发一个警告。

4. 动态参数语法的限制 ❗❗❗

动态参数表达式因为某些字符的缘故有一些语法限制，比如空格和引号`' | "`，在 `HTML` attribute 名称中都是不合法的。例如下面的示例：

~~~
<!-- 这会触发一个编译器警告 -->
<a :['foo' + bar]="value"> ... </a>
~~~

如果你需要传入一个复杂的动态参数，我们推荐使用❗❗❗计算属性替换复杂的表达式，也是 `Vue` 最基础的概念之一，我们很快就会讲到。

当使用 `DOM` 内嵌模板 (直接写在 `HTML` 文件里的模板) 时，我们需要🚀🚀🚀避免在名称中使用大写字母，因为浏览器会强制将其转换为小写：

~~~
<a :[someAttr]="value"> ... </a>
~~~

❗❗❗上面的例子将会在 DOM 内嵌模板中被转换为 `:[someattr]`。如果你的组件拥有 “someAttr” property 而非 “someattr”，这段代码将不会工作。

5. 修饰符

修饰符是以点开头的特殊后缀，表明指令需要以一些特殊的方式被绑定。例如 `.prevent` 修饰符会告知 `v-on` 指令对触发的事件调用 `event.preventDefault()：`

~~~
<form @submit.prevent="onSubmit">...</form>
~~~

之后在讲到 `v-on` 和 `v-model` 的功能时，你将会看到其他修饰符的例子。

最后，在这里你可以在页面最下方直观地看到[完整的指令语法](https://staging-cn.vuejs.org/guide/essentials/template-syntax.html)

## 响应式基础 (分为：选项式 API 和组合式 API) ⭐⭐⭐🌙🌙🌙

### 声明响应式状态 🚀

我们可以使用 `reactive()` 函数创建一个响应式对象或数组：

~~~
import { reactive } from 'vue'

const state = reactive({ count: 0 })
~~~

响应式对象其实是[JavaScript Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)🚀🚀🚀，其行为表现与一般对象相似。不同之处在于` Vue` 能够跟踪对响应式对象 property 的访问与更改操作。如果你对这其中的细节感到好奇，我们在[深入响应式系统](#深入响应式系统)一章中会进行解释，但我们推荐你先读完这里的主要指南。

你也可以看看：[为响应式对象标注类型](#typescript)

要在组件模板中使用响应式状态，请在 `setup()` 函数中定义并返回。

~~~
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
~~~

## TypeScript

### 搭配 TypeScript 使用 Vue 

### TypeScript 与组合式 API

### TypeScript 与选项式 API 

## 生产环境部署指南

## 深入响应式系统

## 使用Vue的多种方式

🚀🌙❗⭐🎄


