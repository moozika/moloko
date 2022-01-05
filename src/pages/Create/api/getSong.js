import storage from "../../../utils/storage";
import { axios } from '../../../lib/axios';

export const getSong = async(id) => {
  return await axios.get(`/api/v1/songs/${id}`,  {
    headers: {
      'access_token': storage.getToken(),
    },
  }).catch((error) => console.log(error));
};

export const getMultSongs = async(ids) => {
  let songs = []

  for(let idx = 0; idx < ids.length; idx++) {
    let res = await axios.get(`/api/v1/songs/${ids[idx]}`,  {
      headers: {
        'access_token': storage.getToken(),
      },
    }).catch((error) => console.log(error));

    songs.push(res.data);
  }

  return songs

}
