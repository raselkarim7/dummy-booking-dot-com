import axios from 'axios'
import storage from '../utils/storage'

const service = axios.create({
		baseURL: 'http://127.0.0.1:8000/api', 
})

service.interceptors.request.use(
		config => {
				config.headers['Authorization'] =  storage.token.getToken() 
				config.headers['Accept'] = 'application/json'
				config.headers['Content-Type'] = 'application/json'
			return config
		},
		error => {
			// Do something with request error
			console.log(error) // for debug
			return Promise.reject(error)
		}
	)

	service.interceptors.response.use(
		response => response,
		error => {
				console.log('http_service.js, err----->' , error.response) // for debug
				
				return Promise.reject(error)
			}
	)

export default service;

