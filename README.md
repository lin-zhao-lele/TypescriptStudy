# TypescriptStudy
TypescriptStudy


### 安装 TypeScript

$ npm install -g typescript

$ npm install -g typescript nodemon concurrently   或者带参数

以上命令会在全局环境下安装 tsc 和 tsserver 两个命令，安装完成之后，我们就可以在任何地方执行它了。

约定使用 TypeScript 编写的文件以 .ts 为后缀，用 TypeScript 编写 React 时，以 .tsx 为后缀。

### 创建项目目录 初始化项目

$ npm init -y

运行 npm init：初始化 package.json。参数-y跳过输入 全部默认 自动生成

以后需要修改的话直接编辑 package.json

### 使用 tsconfig.json 和 tsc命令

#### 初始化

$ tsc --init

上面命令会创建 tsconfig.json 文件 （在项目根目录下保存）

在项目根目录下 自己建两个文件夹 dist 和 src



#### 在 tsconfig.json 中 

修改字段"compilerOptions" :

"target": "es2018"

"outDir": "./dist",                

"rootDir": "./src",  

"allowJs": true, 
                    
"checkJs": true, 

"strict": true,   

"esModuleInterop": true 
 
添加字段: "include": ["src/*.*"]

 

#### 将源文件存放src目录

直接使用tsc编译 (当命令行tsc上指定了输入文件时，tsconfig.json文件会被忽略), 目标js文件存放于生成的dist目录

Js 文件可以在 VS Code中debug