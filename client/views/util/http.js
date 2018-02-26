import axios from 'axios';

const env = process.env.NODE_ENV || 'development';
let baseURL = 'https://dreamwall.koa.gusaifei.com/api/v1';
if (env === 'development') {
  baseURL = 'http://localhost:3000/api/v1/';
}
axios.defaults.baseURL = baseURL;

export function ajax(type, url, data) {
  return new Promise((resolve, reject) => {
    let datas = null;
    if (type === 'get') {
      datas = {
        params: data,
      };
    } else {
      datas = data;
    }

    axios[type](url, datas).then((res) => {
      if (res.status === 200) {
        resolve(res.data);
      } else {
        reject(res.data);
      }
    }).catch(reject);
  });
}

export function fetch(url, params = {}) {
  return ajax('get', url, params);
}

export function post(url, data = {}) {
  return ajax('post', url, data);
}

