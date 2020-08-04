import axios from 'axios'
import baseURL from '../no_git'

export function request(config) {
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    console.log(config);
    return config;
  })

  instance.interceptors.response.use(res => {
    return res.data;
  })

  return instance(config)
}