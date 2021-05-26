import { ForecastResponse } from '../responses/forecast.response';
import { Address } from '../../model/interfaces/address';

export const fromForecastResponseToAddress = (response: ForecastResponse): Address => {
  return {
    city: response.city.name,
    country: response.city.country,
    coords: response.city.coord,
  };
};
