import wepy from 'wepy'

async function wxRequest (options = {}) {
  // options.url = config.paths.api(options.url)

  return wepy.request({
    ...options
  }).then((res) => {
    console.log(res)
    return res
  }).catch((e) => {
    console.log(e)
    return Promise.reject(e)
    // wepy.showModal(JSON.stringify(e.message))
  })
}

function get (url, data = {}, options = {}) {
  return wxRequest({
    url,
    data,
    ...options,
    method: 'GET'
  })
}

function post (url, data = {}, options = {}) {
  options.header = options.header || {}
  options.header['content-type'] = 'application/x-www-form-urlencoded'

  return wxRequest({
    url,
    data,
    ...options,
    method: 'POST'
  })
}

wxRequest.get = get
wxRequest.post = post

export default wxRequest

