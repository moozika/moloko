import axios from 'axios';
import storage from "../../../utils/storage";

export const getVibes = async(query) => {
  return await axios.get('https://moozika.herokuapp.com/api/vibes',  {
    headers: {
      'access_token': storage.getToken(),
    },
  }).catch((error) => console.log(error));
};
