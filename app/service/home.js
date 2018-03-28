/*
 * @Author: dean.zhu86.@gmail.com 
 * @Date: 2018-03-28 10:33:05 
 * @Last Modified by: dean.zhu86@gmail.com
 * @Last Modified time: 2018-03-28 12:44:03
 */

const fetch = require('../../lib/fetch');
const config = require('../../config/config');
exports.getProductList = (ctx) => {
      let listData = [
        {'id':'0001', 'name': '消费分期产品1', 'rate': '12.00'},
        {'id':'0002', 'name': '消费分期产品1', 'rate': '12.00'},
        {'id':'0003', 'name': '消费分期产品1', 'rate': '12.00'},
        {'id':'0004', 'name': '消费分期产品1', 'rate': '12.00'}
      ];
      return listData;
}

exports.getTopics = (ctx) => {
  console.log('this.ctx:', ctx);
  const url = config.api.cnnode +'/topics';
  const options = {
    method: 'GET',
  };
  const result = ''; // await app.ctx.fetch(url, options);
  return result;
}
