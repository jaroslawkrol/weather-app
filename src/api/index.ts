import axios from 'axios';
import { Constants } from '../utils/constants';

const api = axios.create({
  baseURL: Constants.API.BASE_URL,
});

const get = <T>(url: string, params: any) => {
  return api.get<T>(url, {
    params: { ...params, appid: '6177024b7a2f82fd304a24c2a041ccec' },
  });
};

export default { get };
