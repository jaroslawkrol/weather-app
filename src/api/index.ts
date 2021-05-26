import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5', // TODO: extract to constant
});

const get = <T>(url: string, params: any) => {
  return api.get<T>(url, {
    params: { ...params, appid: '6177024b7a2f82fd304a24c2a041ccec' },
  });
};

export default { get };
