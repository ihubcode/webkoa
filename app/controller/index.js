/*
 * @Author: dean.zhu86.@gmail.com 
 * @Date: 2018-03-28 10:33:16 
 * @Last Modified by: dean.zhu86@gmail.com
 * @Last Modified time: 2018-03-28 15:27:31
 */

'use strict';
const serviceBase = require('../service/base.js');
const serviceHome = require('../service/home.js');
exports.index = async (ctx) => {
  const manifestData = await serviceBase.getStatic();
  const listData = await serviceHome.getProductList();
  const newsData = await serviceHome.getTopics(ctx);
  let data = {
    title: '首页',
    resList: listData,
    newsList:newsData,
    static: manifestData
  }
  console.log(listData);
  console.log('newsData', newsData);
  console.log('static:', manifestData);
  await ctx.render('home/index', data)
}