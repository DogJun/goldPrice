import request from './wxRequest'
// const baseUrl = wepy.$appConfig.baseUrl
const baseUrl = 'https://jewelry.timovips.com/yzjj/api'

// login
export const login = (params) => request(params, 'https://jewelry.timovips.com/wechat/user/login')
// 获取广告位信息
export const getAd = (params) => request(params, baseUrl + '/getAd')
// 获取订阅信息
export const getSubscribe = (params) => request(params, baseUrl + '/getSubscribe')
// 获取订阅信息
export const saveSubscribe = (params) => request(params, baseUrl + '/saveSubscribe')
// 获取最新金价信息
export const getLatest = (params) => request(params, baseUrl + '/getLatest')
