import axios from 'axios';

const api = axios.create({
  baseURL: 'http://177.10.200.16:4444/api/',
});

export default api;
