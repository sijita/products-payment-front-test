import axios from 'axios';
import { DB_URL } from '@/lib/constants';

const instance = axios.create({
  baseURL: DB_URL,
});

export default instance;

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
