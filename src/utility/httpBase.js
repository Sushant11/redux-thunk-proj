import axios from 'axios';
import { API_BASE_URL } from './config';

export const httpBase = () => {
  const instance = axios.create({
    baseURL: `${API_BASE_URL}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    responseType: 'json',
  });

  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return instance;
};
