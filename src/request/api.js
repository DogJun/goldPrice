import request from './wxRequest'
// const baseUrl = wepy.$appConfig.baseUrl
const baseUrl = 'https://jewelry.timovips.com/yzjj/api'
export const imgUrl = 'https://jewelry.timovips.com'
// login
export const login = (data = {}, options = {}) => request.post('https://jewelry.timovips.com/wechat/user/login', data, options)
// 获取广告位信息
export const getAd = (data = {}, options = {}) => request.post(baseUrl + '/getAd', data, options)
// 获取订阅信息
export const getSubscribe = (data = {}, options = {}) => request.post(baseUrl + '/getSubscribe', data, options)
// 获取订阅信息
export const saveSubscribe = (data = {}, options = {}) => request.post(baseUrl + '/saveSubscribe', data, options)
// 获取最新金价信息
export const getLatest = (data = {}, options = {}) => request.get(baseUrl + '/getLatest', data, options)
// 获取贵金属提醒
export const getRemind = (data = {}, options = {}) => request.post(baseUrl + '/getRemind', data, options)
