import axios from 'axios'
import { toast } from 'react-toastify'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API_URL,
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 204) {
        return Promise.reject(error)
      }

      toast('Request failed!', { type: 'error' })

      return Promise.reject(error)
    }
  },
)

const api = {
  getData: (url: string) =>
    axiosInstance.post('/', {
      url,
    }),
}

export default api
