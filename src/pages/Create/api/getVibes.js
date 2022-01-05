import storage from "../../../utils/storage";
import { axios } from '../../../lib/axios';

export const getVibes = async(query) => {
  return await axios.get('/api/v1/vibes',  {
    headers: {
      'access_token': storage.getToken(),
    },
  }).catch((error) => console.log(error));
};
