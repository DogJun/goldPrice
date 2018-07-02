import wepy from 'wepy'

export default async(params = {}, url) => {
  wepy.showNavigationBarLoading()
  let data = params.query || {}
  let res = await wepy.request({
    url: url,
    method: params.method || 'POST',
    data: data,
    // header: { 'Content-Type': 'application/json' },
    header: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
  wepy.hideNavigationBarLoading()
  return res
}
