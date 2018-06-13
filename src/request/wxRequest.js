import wepy from 'wepy'

export default async(params = {}, url) => {
  wepy.showNavigationBarLoading()
  let data = params.query || {}
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: { 'Content-Type': 'application/json' },
  })
  wepy.hideNavigationBarLoading()
  return res
}
