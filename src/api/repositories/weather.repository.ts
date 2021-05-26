import api from '../index';
import { OneCallResponse } from '../responses/one-call.response';
import { fromOneCallResponseToWeatherInfo } from '../factories/from-one-call-response-to-daily-weather.factory';
import { DailyWeather } from '../../model/interfaces/daily-weather';

const fetchWeatherByCoords = async (lat: number, lon: number): Promise<DailyWeather[]> => {
  const { data } = await api.get<OneCallResponse>('/onecall', {
    lat,
    lon,
    cnt: 8 * 5,
    units: 'metric',
    exclude: 'current,minutely,hourly,alerts',
  });
  return fromOneCallResponseToWeatherInfo(data);
};
// TODO: cnt to constants

export default { fetchWeatherByCoords };
