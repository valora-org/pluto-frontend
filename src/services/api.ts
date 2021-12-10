import axios from 'axios'

const localUrl = window.location.origin

export const baseURL =
  localUrl === 'http://localhost:3000'
    ? 'http://localhost:3333'
    : 'production-api'

const api = axios.create({
  baseURL
})

// export const setHeaderApiToken = () => {
//   api.defaults.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
// }

export default api
