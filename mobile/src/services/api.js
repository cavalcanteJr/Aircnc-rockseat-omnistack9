import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.26.81.52:3333',
});

export default api;