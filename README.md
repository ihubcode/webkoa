# webpack + koa 项目实战

> 本项目利用webpack打包，生成manifest.json , 由koa渲染静态资源文件引入


### 项目环境：

 - 操作系统：Windows 10 or OS X 10.13.3
 - 开发工具： Visual Studio Code
 - 服务端框架：KOA2
 - 前端构建工具： Webpack@3.11.0



### 项目安装

- **webpack 需要安装的依赖包：**

```
// 处理js入口文件中import的css文件
npm install style-loader css-loader --save-dev

// 处理sass
npm install sass-loader node-sass --save-dev

// 分离js入口文件中import的css文件
npm install extract-text-webpack-plugin --save-dev

// 处理图片，对未设置或者小于limit设置的图片进行转换，以base64的格式被img的src使用；对于大于limit的图片用file-loader进行解析
npm install url-loader --save-dev

// 清理/dist 文件夹
npm install clean-webpack-plugin --save-dev

// js压缩
npm install uglifyjs-webpack-plugin --save-dev

//生成manifest.json 文件
npm install webpack-manifest-plugin --save-dev

// babel编译
// babel核心包
npm install babel-core --save-dev

// babel的loader包
npm install babel-loader --save-dev

// babel解析es6的包（webpack最新推荐，代替babel-preset-es2015）
npm install babel-preset-env --save-dev

//解决由于辅助代码的引入造成代码体积过大的问题
npm install babel-plugin-transform-runtime --save-dev

// 
npm install babel-runtime --save
```

- **Koa 需要安装的依赖包：**

```
npm install koa --save

npm install node-fetch --save

npm install koa-nunjucks-2 --save

npm install koa-router --save

npm install debug --save

```

- **服务器环境需要安全的依赖包：**

```
npm install pm2 -g

npm install nodemon --save-dev

```

- **项目运行：**

```
// webpack编译
$ npm run webpack

// app 启动
$ npm run start 

```

### 项目结构：

```
| - 根目录
  | - app  // 项目目录
    | - controller  // 项目控制器
    | - service  // 项目数据操作层
    | - views  // 项目模板目录
    | - static // 静态文件开发目录
  |- build  // webpack 配置类文件
    | - util.js
    | - webpack.base.js  // webpack基础配置
    | - webpack.dev.js  // webpack 开发配置
    | - webpack.pro.js  // webpack 部署配置
  | - config // 项目配置类文件
    | - config.js  // 项目公告配置
    | - router.js  // 路由配置
  | - core  // koa封装类...
  | - lib // 工具类
  | - static  // webpack打包输入目录
  | - index.js  // 项目启动文件
  | - package.json // npm 依赖配置
  | - README.md  // 项目说明
  | - .gitignore  // git过滤配置
```