import storage from "../../../utils/storage";
import { axios } from '../../../lib/axios';

export const createMood = async(name, vibes, songs, description) => {
  console.log(name, vibes, songs, description)
  return await axios.post('/api/v1/mood',  {
    name: name,
    vibes: vibes,
    songs: songs,
    description: description,
  },{
    headers: {
      'access_token': storage.getToken(),
    },
  }).catch((error) => console.log(error));
};
