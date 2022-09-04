# TypescriptStudy
TypescriptStudy


### 安装 TypeScript

$ npm install typescript -g
以上命令会在全局环境下安装 tsc 和 tsserver 两个命令，安装完成之后，我们就可以在任何地方执行它了。

约定使用 TypeScript 编写的文件以 .ts 为后缀，用 TypeScript 编写 React 时，以 .tsx 为后缀。

### 使用 tsconfig.json 和 tsc命令

当命令行tsc上指定了输入文件时，tsconfig.json文件会被忽略。
在项目根目录下保存 tsconfig.json
修改字段"compilerOptions" 的 "target"
添加字段 "include": ["src/*.*"]

将源文件存放src目录

直接使用tsc编译

目标js文件存放于生成的dist目录

Js 文件可以在VS Code中debug