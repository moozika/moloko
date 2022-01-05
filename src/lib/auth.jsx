import React, {createContext, useContext} from 'react';
import { axios } from '../lib/axios';
import storage from '../utils/storage';


// Auth Context
export const AuthContext = createContext(null);


// fetch user profile
export const fetchUser = async() => {
  return await axios.post('/api/v1/user', {}, {
    headers: {
      'access_token': storage.getToken(),
    },
  }).catch((error) => {
    console.log(error)
    storage.clearToken()
  });
};

export const logout = () => {
  storage.clearToken()
};
