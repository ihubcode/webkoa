/*
 * @Author: dean.zhu86.@gmail.com 
 * @Date: 2018-03-28 10:32:06 
 * @Last Modified by:   dean.zhu86@gmail.com 
 * @Last Modified time: 2018-03-28 10:32:06 
 */

const Router = require('koa-router');
const router = new Router();
const index = require('../app/controller/index');
const user = require('../app/controller/user');

router
  .get('/', index.index)
  .get('/user', user.index)
  .get('/user/login', user.login)
  .get('/user/reg', user.reg)

module.exports = router