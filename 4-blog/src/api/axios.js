import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://5c3755177820ff0014d92711.mockapi.io',
});

export default axiosInstance;
