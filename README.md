

webpack 需要安装的依赖包：

```
// 处理js入口文件中import的css文件
npm install style-loader css-loader --save-dev

// 处理sass
npm install sass-loader node-sass --save-dev

// 分离js入口文件中import的css文件
npm install extract-text-webpack-plugin --save-dev

// 清理/dist 文件夹
npm install clean-webpack-plugin --save-dev
```