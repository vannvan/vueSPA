// 开发环境用config下proxyTable的代理地址
var BASE_URL = '/api';
var NPM_API = 'npm-api';
var GITHUB_API = 'github-api';
var isPro = process.env.NODE_ENV === 'production'
if(isPro){
    BASE_URL= 'http://113.113.113.113:8011'  //生产环境下的地址
}

const UrlConfig = {
  getUserInfo:BASE_URL +'user/getinfo',  //获取用户信息

  getNpmPackageDownloads:NPM_API + "/downloads/range"
}
export default {
  UrlConfig
};
