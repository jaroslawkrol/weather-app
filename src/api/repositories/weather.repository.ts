import api from '../index';
import { OneCallResponse } from '../responses/one-call.response';
import { fromOneCallResponseToWeatherInfo } from '../factories/from-one-call-response-to-daily-weather.factory';
import { DailyWeather } from '../../model/interfaces/daily-weather';
import { Constants } from '../../utils/constants';

const fetchWeatherByCoords = async (lat: number, lon: number): Promise<DailyWeather[]> => {
  const { data } = await api.get<OneCallResponse>(Constants.API.ONE_CALL, {
    lat,
    lon,
    units: Constants.OPEN_WEATHER.UNITS,
    exclude: Constants.OPEN_WEATHER.ONE_CALL_EXCLUDED,
  });
  return fromOneCallResponseToWeatherInfo(data);
};

export default { fetchWeatherByCoords };
