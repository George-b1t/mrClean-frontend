import axios from 'axios';
import ip from './ip';

const api = axios.create({
  baseURL: `${ip}:3453`
});

export default api;