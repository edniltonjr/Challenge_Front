import axios from 'axios';

const myApi = axios.create({
  baseURL: 'localhost:3333',
});

export default myApi;
