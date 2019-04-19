import path from 'path'
const BASE = 'vitapet'

export default (url, params) => {
  path.join()
  const fetchUrl = path.join(BASE, url)
  let paramsStr = ''
  Object.keys(params).forEach(key => {
    paramsStr = paramsStr + '&' + key + '=' + params[key]
  })
  return fetch(fetchUrl + '?' + paramsStr.slice(1)).then(r => r.json())
}