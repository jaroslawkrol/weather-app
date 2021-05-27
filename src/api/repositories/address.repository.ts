import api from '../index';
import { ForecastResponse } from '../responses/forecast.response';
import { fromForecastResponseToAddress } from '../factories/from-forecast-response-to-location.factory';
import { Address } from '../../model/interfaces/address';
import { Constants } from '../../utils/constants';

/**
 * This repository is kind of walkaround how to fetch detailed location info by latlon or city name.
 * In perfect world I would prefer to use Google API or sth else, anyway it works ;)
 */

const fetchAddressByCoords = async (lat: number, lon: number): Promise<Address> => {
  const { data } = await api.get<ForecastResponse>(Constants.API.FORECAST, {
    lat,
    lon,
    cnt: 1,
  });
  return fromForecastResponseToAddress(data);
};

const fetchAddressByCityName = async (cityName: string): Promise<Address> => {
  const { data } = await api.get<ForecastResponse>(Constants.API.FORECAST, {
    q: cityName,
    cnt: Constants.OPEN_WEATHER.FORECAST_CNT,
  });
  return fromForecastResponseToAddress(data);
};

export default { fetchAddressByCoords, fetchAddressByCityName };
