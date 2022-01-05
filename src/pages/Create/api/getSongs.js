import storage from "../../../utils/storage";
import { axios } from '../../../lib/axios';

export const getSongs = async(query) => {
  return await axios.get('/api/v1/songs/search',  {
    headers: {
      'access_token': storage.getToken(),
    },
    params: {
      query: query,
    },
  }).catch((error) => console.log(error));
};
