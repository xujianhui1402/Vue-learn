# Vben Vue learn
## IDEA快捷键
> IDEA快捷键 `Ctrl + Enter` 显示该文加下该字段有所引用，类似于`Ctrl + 鼠标左键`
## Vite项目初始化
1. yarn create @vitejs/app

> 名称
vben-learn

> vue-ts的模板回车
√ vue-ts

2. vsCode插件(
> VbenAdmin 官方推荐
  DotENV： .env 文件 高亮;
  ESLint：脚本代码检查;
  i18n Ally： i18n 插件;
  Iconify IntelliSense：Iconify 图标插件;
  Prettier - Code formatter：代码格式化;
  stylelint：css 格式化;
  Vetur：vue 开发必备 （也可以选择 Volar）;
  WndiCSS lntelliSense：windicss 提示插件;
> 个人推荐
  Chinese：vsCode汉化;
  EditorConfig for VS Code：项目约束;
  IntelliJ IDEA Keybindings：IDEA的快捷键，因为我比较熟悉IDEA的快捷键，不太了解vsCode的;
  Project Manager：项目管理工具;)
## 项目约束文件EditorConfig
~~~
# ↓告诉EditorConfig插件，这是根文件，不用继续往上查找。
root = true

# ↓匹配全部文件。
[*]
# ↓使用`utf-8`字符集。
charset=utf-8
# ↓结尾换行符，可选`lf`、`cr`、`crlf`。
end_of_line=lf
# ↓在文件结尾插入新行。
insert_final_newline=true
# ↓缩进的样式为空格。
indent_style=space
# ↓缩进为2。
indent_size=2
# ↓行最大长度为100。
max_line_length = 100

# ↓匹配以`.yml`、`.yaml`、`.json`结尾的文件。
[*.{yml,yaml,json}]
indent_style = space
indent_size = 2

# ↓匹配以`.md`结尾的文件。
[*.md]
# ↓
trim_trailing_whitespace = false

[Makefile]
indent_style = tab
~~~
## Vite配置多环境
1. `.env`：
~~~
# 运行的端口
VITE_PORT = 3100

# 应用名称
VITE_GLOB_APP_TITLE = Vben Admin

# 应用短名称
VITE_GLOB_APP_SHORT_NAME = vue_vben_admin
~~~
2. `.env.production`：
~~~
# 是否使用mock
VITE_USE_MOCK = true

# 公共路径
VITE_PUBLIC_PATH = /

# 是否删除所有日志打印
VITE_DROP_CONSOLE = true

# 是否启用gzip或brotli压缩。
# 可选：gzip | brotli | none
# 如果你需要多个表格，你可以使用`,`来分隔。
VITE_BUILD_COMPRESS = 'none'

# 应用基本接口地址
VITE_GLOB_API_URL=/api

# 文件上传地址，可选
# 可以通过nginx转发或直接写入实际地址。
VITE_GLOB_UPLOAD_URL=/upload

# 接口前缀
VITE_GLOB_API_URL_PREFIX=

# 是否启用图像压缩
VITE_USE_IMAGEMIN= true

#使用PWA
VITE_USE_PWA = false

# 是否与旧版浏览器兼容
VITE_LEGACY = false
~~~
3. `.env.development`：
~~~
# 是否使用mock
VITE_USE_MOCK = true

# 公共路径
VITE_PUBLIC_PATH = /

# 跨域代理，你可以配置多个代理。
VITE_PROXY=[["/api","http://localhost:3000"],["/upload","http://localhost:3001/upload"]]
# VITE_PROXY=[["/api","https://vvbin.cn/test"]]

# 是否删除所有日志打印
VITE_DROP_CONSOLE = false

# 应用基本接口地址
VITE_GLOB_API_URL=/api

# 文件上传地址，可选
VITE_GLOB_UPLOAD_URL=/upload

# 接口前缀
VITE_GLOB_API_URL_PREFIX=
~~~
4. `const vitePort = ref(import.meta.env.VITE_PORT);` 可以获取`.env`中设置的端口
## 配置TS
创建`tsconfig.json`并配置：
~~~
{
  "compilerOptions": {
    // ↓指定ECMAScript目标版本，esnext为最新版本
    "target": "esnext",
    // ↓指定生成哪个模块系统代码，esnext为最新版本
    "module": "esnext",
    // ↓决定如何处理模块。
    "moduleResolution": "node",
    // ↓启用所有严格类型检查选项。
    "strict": true,
    // ↓禁止对同一个文件的不一致的引用。
    "forceConsistentCasingInFileNames": true,
    // ↓允许从没有设置默认导出的模块中默认导入。这并不影响代码的输出，仅为了类型检查。
    "allowSyntheticDefaultImports": true,
    // ↓禁用函数参数双向协变检查。
    "strictFunctionTypes": false,
    // ↓在 .tsx文件里支持JSX
    "jsx": "preserve",
    // ↓解析非相对模块名的基准目录。查看 模块解析文档了解详情。
    "baseUrl": ".",
    // ↓允许编译javascript文件。
    "allowJs": true,
    // ↓生成相应的 .map文件。
    "sourceMap": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    // ↓若有未使用的局部变量则抛错。
    "noUnusedLocals": true,
    // ↓若有未使用的参数则抛错。
    "noUnusedParameters": true,
    // ↓启用实验性的ES装饰器。
    "experimentalDecorators": true,
    // ↓编译过程中需要引入的库文件的列表。
    "lib": ["dom", "esnext"],
    // ↓要包含的类型声明文件名列表。
    "types": ["vite/client"],
    // ↓要包含的类型声明文件路径列表。
    "typeRoots": ["./node_modules/@types/", "./types"],
    "incremental": true,
    // ↓在表达式和声明上有隐含的 any类型时报错。
    "noImplicitAny": false,
    // ↓忽略所有的声明文件（ *.d.ts）的类型检查。
    "skipLibCheck": true,
    // ↓模块名到基于 baseUrl的路径映射的列表。查看 模块解析文档了解详情。
    "paths": {
      "/@/*": ["src/*"],
      "/#/*": ["types/*"]
    }
  },
  // ↓指定一个匹配列表（属于自动指定该路径下的所有ts相关文件）
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "types/**/*.d.ts",
    "types/**/*.ts",
    "mock/**/*.ts"
  ],
  // 指定一个排除列表（include的反向操作）
  "exclude": ["node_modules", "dist", "**/*.js"]
}
~~~
## ES
> ①安装安装eslint
1. ESLint简单的来说就是去判断你的JS代码写的格式对不对的一个依赖。没有它你的代码也能运行，有了它你的代码可以写的更漂亮。ESLint还支持插件，第三方框架会基于ESLint写出自己的代码检查插件。比如Vue3对应eslint-plugin-vue。
2. 安装ESLint `yarn add eslint --dev`
3. 配置ESLint：根目录下创建：`.eslintrc.js`文件
~~~
module.exports = {
  // ↓默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。如果你想要你所有项目都遵循一个特定的约定时，这将会很有用，但有时候会导致意想不到的结果。为了将 ESLint 限制到一个特定的项目，在你项目根目录下的 package.json 文件或者 .eslintrc.* 文件里的 eslintConfig 字段下设置 "root": true。ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
  // ↓此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  // ↓指定你想启用的环境
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // ↓设置解析器
  parser: "",
  // ↓解析器选项
  parserOptions: {},
  // ↓扩展项
  extends: [],
  // ↓自定义规则配置
  rules: {},
};
~~~
4. 配置ESLint忽略文件
~~~
*.sh
node_modules
*.md
*.woff
*.ttf
.vscode
.idea
dist
/public
/docs
.husky
.local
/bin
Dockerfile
~~~
> ②安装eslint-plugin-vue 
1. 安装两个插件`yarn add eslint-plugin-vue vue-eslint-parser --dev`
2. 将插件配置进ESLint,根目录下修改：`.eslintrc.js`文件
~~~
module.exports = {
  // ...
  parser: 'vue-eslint-parser',
  // ...
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  // ...
};
~~~
> ③安装@typescript-eslint
1. 这里同理需要安装`@typescript-eslint/eslint-plugin`和`@typescript-eslint/parser`，输入安装指令 `yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser --dev`
2. 将插件配置进ESLint
~~~
module.exports = {
  // ...
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  extends: ["plugin:vue/vue3-recommended", "plugin:@typescript-eslint/recommended"],
  // ...
};
~~~
> ④安装eslint-plugin-prettier

prettier用来格式化代码的。一般IDE都有prettier的插件，在保存的时候格式化代码。那么我们eslint-plugin-prettier就是通过JS来判断代码格式是否正确。一般这很必要，因为不同的程序员有不同的IDE，不同的IDE有不同的prettier插件。但对于项目来说只有一个eslint-plugin-prettier。而eslint-plugin-prettier插件依赖于prettier依赖。那么eslint-config-prettier插件又是干嘛的?从npm首页上看，说是解决冲突的，好像prettier和ESLint之间有些规则好像不一样。所以eslint-config-prettier将prettier一些规则默认关闭了。

1. `yarn add prettier eslint-plugin-prettier eslint-config-prettier --dev`
2. 配置prettier，在根目录下创建：`prettier.config.js`文件
~~~
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  vueIndentScriptAndStyle: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  trailingComma: 'es5',
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: 'always',
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf',
  rangeStart: 0,
};
~~~
3. 配置prettier忽略文件，在根目录下创建：`.prettierignore`文件
~~~
/dist/*
.local
.output.js
/node_modules/**
**/*.svg
**/*.sh
/public/*
~~~
4. 配置进ESLint：修改根目录下：`.eslintrc.js`文件
~~~
module.exports = {
  // ...
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  // ...
};
~~~
> ⑤自定义ESLint检查规则

之前说了`ESLint`是用来检查代码的。又安装了那么多的插件。但是官方默认的方案有时不一样符合我们的要求。我们需要自定义自己的规则。修改规则主要是修改根目录下`.eslintrc.js`文件的`rules`字段

1. 修改`.eslintrc.js`
~~~
module.exports = {
  // ...
  rules: {
    // ↓禁止使用@ts-ignore来消除ESLint检查
    '@typescript-eslint/ban-ts-ignore': 'off',
    // ↓在函数和类方法上需要显式的返回类型
    '@typescript-eslint/explicit-function-return-type': 'off',
    // ↓禁止使用any类型
    '@typescript-eslint/no-explicit-any': 'off',
    // ↓除导入语句外，禁止使用require语句
    '@typescript-eslint/no-var-requires': 'off',
    // ↓禁止使用空函数
    '@typescript-eslint/no-empty-function': 'off',
    // ↓对自定义事件名称强制使用特定的大小写
    'vue/custom-event-name-casing': 'off',
    // ↓禁止定义前使用
    'no-use-before-define': 'off',
    // ↓在定义变量之前不允许使用变量
    '@typescript-eslint/no-use-before-define': 'off',
    // ↓禁止使用@ts-注解
    '@typescript-eslint/ban-ts-comment': 'off',
    // ↓禁止使用特定类型
    '@typescript-eslint/ban-types': 'off',
    // ↓禁止使用!后缀运算符进行非null断言
    '@typescript-eslint/no-non-null-assertion': 'off',
    // ↓在导出的函数和类的公共类方法上需要显式的返回值和参数类型
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // ↓禁止使用未使用的变量
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$',
      },
    ],
    // ↓禁止使用未使用的变量
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$',
      },
    ],
    // ↓在函数括号前需要或不允许有空格
    'space-before-function-paren': 'off',

    // ↓强制属性顺序
    'vue/attributes-order': 'off',
    // ↓强制每个组件应位于其自己的文件中
    'vue/one-component-per-file': 'off',
    // ↓在标签的右括号之前要求或不允许换行
    'vue/html-closing-bracket-newline': 'off',
    // ↓强制每行的最大属性数
    'vue/max-attributes-per-line': 'off',
    // ↓在多行元素的内容之前和之后需要换行
    'vue/multiline-html-element-content-newline': 'off',
    // ↓在单行元素的内容之前和之后需要换行
    'vue/singleline-html-element-content-newline': 'off',
    // ↓在模板中的自定义组件上实施属性命名样式
    'vue/attribute-hyphenation': 'off',
    // ↓需要道具的默认值
    'vue/require-default-prop': 'off',
    // ↓实施自我封闭的风格
    // 'vue/html-self-closing': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
};
~~~
## vben项目配置git忽略文件

这个应该是项目一上来就要处理的，根目录下创建：`.gitignore`文件
~~~
node_modules
.DS_Store
dist
dist-ssr
*.local

# other
.npmrc
.cache
test/upload-server/static

.local
# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Editor directories and files
.idea
# .vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
~~~