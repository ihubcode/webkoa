/*
 * @Author: dean.zhu86.@gmail.com 
 * @Date: 2018-03-28 10:33:22 
 * @Last Modified by: dean.zhu86@gmail.com
 * @Last Modified time: 2018-03-28 15:28:36
 */

'use strict';
const serviceBase = require('../service/base.js');
// 首页
exports.index = async (ctx) => {
  const manifestData = await serviceBase.getStatic();
  let data = {
    title: '首页',
    static: manifestData
  }
  await ctx.render('user/index', data)
}

// 登录
exports.login = async (ctx) => {
  const manifestData = await serviceBase.getStatic();
  let data = {
    title: '会员登录',
    static: manifestData
  }
  await ctx.render('user/index', data)
}

// 注册
exports.reg = async (ctx) => {
  const manifestData = await serviceBase.getStatic();
  let data = {
    title: '会员注册',
    static: manifestData
  }
  await ctx.render('user/index', data)
}