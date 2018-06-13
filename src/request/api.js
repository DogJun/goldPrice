import wepy from 'wepy'
import request from './wxRequest'
console.log(wepy.$appConfig.baseUrl)
const baseUrl = wepy.$appConfig.baseUrl

// login
export const login = (params) => request(params, baseUrl + '/imy/bms/GysApi/common/user-info')
