import api from '../index';
import { ForecastResponse } from '../responses/forecast.response';
import { fromForecastResponseToAddress } from '../factories/from-forecast-response-to-location.factory';
import { Address } from '../../model/interfaces/address';

/**
 * This repository is kind of walkaround how to fetch detailed location info by latlon or city name.
 * In perfect world I would prefer to use Google API or sth else, anyway it works ;)
 */

const fetchAddressByCoords = async (lat: number, lon: number): Promise<Address> => {
  const { data } = await api.get<ForecastResponse>('/forecast', {
    lat,
    lon,
    cnt: 1,
  });
  return fromForecastResponseToAddress(data);
};

const fetchAddressByCityName = async (cityName: string): Promise<Address> => {
  const { data } = await api.get<ForecastResponse>('/forecast', {
    q: cityName,
    cnt: 1,
  });
  return fromForecastResponseToAddress(data);
};

export default { fetchAddressByCoords, fetchAddressByCityName };
