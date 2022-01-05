import Axios from 'axios';
import storage from '../utils/storage';

const authRequestInterceptor = (config) => {
  const token = storage.getToken();

  if (token) {
    config.headers.authorization = token;
  }
  config.headers.Accept = 'application/json';

  return config;
};

export const axios = Axios.create({
  baseURL: process.env.PROD ? 'https://moozika.herokuapp.com' : 'https://moozika-dev.herokuapp.com',
})

axios.interceptors.request.use(authRequestInterceptor);
