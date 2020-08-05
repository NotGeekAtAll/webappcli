import axios from 'axios'
import qs from 'qs'

let instance = axios.create({
  baseURL: 'https://evp.51job.com',
  timeout: 30000
})

export default {
  post (url, data) {
    return instance({
      method: 'post', // 请求协议
      url: url, // 请求的地址
      data: qs.stringify(data), // post 请求的数据
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },
  file (url, formData) {
    return instance({
      method: 'post', // 请求协议
      url: url, // 请求的地址
      data: formData, // post 请求的数据
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  get (url, params) {
    return instance({
      method: 'get',
      url: url,
      params // get 请求时带的参数
    })
  }
}