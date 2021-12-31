import axios from "axios";
import storage from "../../../utils/storage";

export const createMood = async(name, vibes, songs, description) => {
  console.log(name, vibes, songs, description)
  return await axios.post('https://moozika.herokuapp.com/api/mood',  {
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
