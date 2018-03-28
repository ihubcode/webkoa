const fetch = require('../../lib/fetch');
const config = require('../../config/config');

exports.getStatic = async (ctx) => {
    console.log('this.ctx:', ctx);
    const jsonUrl = config.manifest;
    const options = {
      method: 'GET',
    };
    await fetch(jsonUrl)
          .then(res => res.json())
          .then(json => {
            result = json;
          });
    return result;
  }