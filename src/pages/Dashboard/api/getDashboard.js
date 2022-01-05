import storage from "../../../utils/storage";
import { axios } from '../../../lib/axios';

export const getDashboard = async() => {
  return await axios.get('/api/v1/dashboard',  {
    headers: {
      'access_token': storage.getToken(),
    },
  }).catch((error) => console.log(error));
};