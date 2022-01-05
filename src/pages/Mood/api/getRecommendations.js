import storage from "../../../utils/storage";
import { axios } from '../../../lib/axios';

export const getRecommendations = async(id) => {
  return await axios.get(`/api/v1/mood/${id}/recommendations`,  {
    headers: {
      'access_token': storage.getToken(),
    },
  }).catch((error) => console.log(error));
};
