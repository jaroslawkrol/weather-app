import axios from 'axios';
import { Constants } from '../utils/constants';
import { OPEN_WEATHER_KEY } from 'react-native-dotenv';

const api = axios.create({
  baseURL: Constants.API.BASE_URL,
});

const get = <T>(url: string, params: any) => {
  return api.get<T>(url, {
    params: { ...params, appid: OPEN_WEATHER_KEY },
  });
};

export default { get };
