import path from 'path'
import { isEqual } from 'lodash'
const BASE = 'vitapet'

const serverRun = false

export default (url, params) => {
  path.join()
  const fetchUrl = path.join(BASE, url)
  let paramsStr = ''
  Object.keys(params).forEach(key => {
    paramsStr = paramsStr + '&' + key + '=' + params[key]
  })
  return serverRun
    ? fetch(fetchUrl + '?' + paramsStr.slice(1)).then(r => r.json())
    : Promise.resolve(responseExample(params)[url].response)
}

const responseExample = (params) => {
  return {
    'login': {
      'response': isEqual(params, { username: 'Vlad', password: '366566' })
        ? {
          'login': true,
          'username': 'Vlad',
          'msg': ''
        }
        : {
          'login': false,
          'username': 'Vlad',
          'msg': 'Не верные имя пользователя или пароль'
        }
    }
  }
}
