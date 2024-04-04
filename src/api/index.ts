import axios from 'axios'

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'http://localhost:8000'
      : 'http://localhost:8000',
})

api.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('access_token')) {
      config.headers.Authorization =
        'Bearer ' + localStorage.getItem('access_token')
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
