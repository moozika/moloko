import storage from "../../../utils/storage";
import { axios } from '../../../lib/axios';

export const editMood = async(name, vibes, songs, description, id) => {
  console.log(name, vibes, songs, description)
  return await axios.post(`/api/v1/mood/${id}/edit`,  {
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
