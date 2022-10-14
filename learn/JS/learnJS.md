#2022.7.20
对于`{a:{},b:{}}`的 hash 键值对数据遍历的时候不能直接 `for (const r of hash)`,可以使用 `for (const r in hash)` 或者 `for (const r in Object.values(hash))`
#2022.7.27
创建副本ES6新语法
{...obj} 创建一个新的副本对象
[...array] 创建一个新的副本数组

# 2022.08.03 开始学习《JavaScript高级程序设计》
###  序  第一章：什么是JavaScript
- JavaScript = ECMAScript + BOM + DOM
- 网景公司为解决表单校验需要先发送请求至服务器的延迟问题开发了JS
- Mozilla ：Firefox 是唯一保留了JS版本至今的浏览器 （网景另一个Web： NetScape Navigator）
### 第二章：HTML中的JavaScript
- HTML4.01 `<script>`标签中的defer属性：页面解析完成后延迟运行（只对外部脚本文件有效）  
- 由于JS可以使用 DOM API，因此，可以通过DOM创建一个`<script>`元素同样可以加载指定的脚本
```
let script = document.createElement('script')
script.src = 'XX.js'
script.async = 'false'  //保证浏览器一致，可能有的游览器不支持async 属性
document.head.appendChild(script)
```
-  `<noscript>` 曾经的标签为了适配不支持JS的浏览器，若浏览器支持JS则`<noscript>` 标签里面的内容不会被渲染。
### 第三章 语言基础
# 关键字 var 和 let
- var的作用域是函数作用域；var声明会在作用域中提升；var可以重复声明；
- let的作用域是块作用域；let声明不会在作用域中提升，会有‘暂时性死区’；let不可以重复声明会抛出错误
# 全局声明

# 2022.9.5
> 使用模版字面量也可以直接获取原始的模版字面量内容
```
console.log(`\u00A9`)  // 版权符号
console.log(String.raw`\u00A9`) // \u00A9
另外，也可以通过标签函数的第一个参数，即字符串数组的.raw属性取得每个字符串的原始内容
function tagfuncc(string){
  for (const r of string.raw){
    console.log(r)
  }
}
```
# 2022.9.27
操作符：
> 一元操作符：递增、递减（前后缀++或--）、一元加减

> 位操作符：按位非（~） 按位与（&） 按位或（|） 按位异或（^） 左移（<<）(会保留原数据符号，但是可以移动至符号位，满32位会循环移回来) 有符号右移（>>）(会保留原数据符号，符号位不变，满32位会循环移回来) 无符号右移（>>>）(满32位会循环移回来)

> 逻辑操作符：逻辑非（!） 逻辑与（&&）（短路操作符，会根据第一个操作数是true或false决定返回第一个操作数还是第二个操作数） 逻辑或（||）

> 乘性操作符：乘法（*）、除法（/）、取模（%余数）

> 指数操作符：**（ES7新增操作符，原来为Math.pow（）方法），同时有自己的指数赋值操作符 **=，例如：let a = 2 a**=2 则a为4

> 加性操作符：加法操作符（分两种情况：数值和字符串）、减法操作符

> 关系操作符：<、<=、>、>= 这几个操作符都返回布尔值

> 相等操作符：等于和不等于（==、!=）会转换操作数，全等和不全等（===、!==）不会转换操作数

> 条件操作符（三元、三目操作符） let x = XXX?XXX:XXX

> 赋值操作符：=， 可以使用简写语法（不会提升性能），如： *=、/=、%=、+=、-=、<<=、>>=、>>>=

> 逗号操作符：let num1 = 1, num2 = 2, num3 = 3 或者 console.log((1,2,3,4)) 结果为4,因为赋值时使用逗号操作符分隔值最终会返回表达式中的最后一个值。
标签语句： label:statement ，可以通过break或continue语句引用。
