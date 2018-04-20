/*
 * @Author: dean.zhu86.@gmail.com 
 * @Date: 2018-03-28 10:32:29 
 * @Last Modified by: dean.zhu86@gmail.com
 * @Last Modified time: 2018-04-20 10:00:08
 */

const Koa = require('koa');
const app = new Koa();
const path = require('path');
const fs = require('fs');
const debug = require('debug')('ikoa:http');
const staticServer = require('koa-static');
const router = require('./config/router');
// 基础配置引入
const appConfig = require('./config/config.js');
console.log('appConfig:', appConfig);
//加载nunjucks模板引擎
const koaNunjucks = require('koa-nunjucks-2');

app.use(koaNunjucks({
  ext: 'html',
  path: path.join(__dirname, 'app/views'),
  nunjucksConfig: {
    trimBlocks: true
  }
}));
// 加载路由
app.use(router.routes());
app.use(router.allowedMethods());

//静态资源请求
app.use(staticServer(path.join(__dirname, './static')));

// 监听端口
app.listen(appConfig.port);
// app运行提示
console.log('A new application by Ikoa which run successfully!');
console.log(`Server running at http://${appConfig.host || '127.0.0.1'}:${appConfig.port}`);
