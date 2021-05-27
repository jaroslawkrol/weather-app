import { Daily, OneCallResponse, Temp } from '../responses/one-call.response';
import { DailyWeather } from '../../model/interfaces/daily-weather';
import moment from 'moment';
import { WeatherCode } from '../../model/enums/weather-code.enum';
import { Constants } from '../../utils/constants';

export const fromOneCallResponseToWeatherInfo = (
  weatherResponse: OneCallResponse,
): DailyWeather[] => {
  return weatherResponse.daily
    .slice(0, Constants.OPEN_WEATHER.ONE_CALL_MAX_RESULTS)
    .map((daily: Daily, index: number) => {
      const date = moment(daily.dt * 1000);
      const weather = daily.weather && daily.weather.length ? daily.weather[0] : undefined;

      if (!weather) {
        throw new Error('Incorrect response format');
      }

      return {
        id: `daily-${index}`,
        date: date.format(Constants.DATE_FORMAT),
        dayOfWeek: date.format(Constants.DAY_OF_WEEK_FORMAT),
        type: <WeatherCode>weather.main,
        description: weather.description,
        morningTemperature: Math.round(daily.temp.morn),
        dayTemperature: Math.round(daily.temp.day),
        nightTemperature: Math.round(daily.temp.night),
        humidity: Math.round(daily.humidity),
        minimum: Math.round(daily.temp.min),
        maximum: Math.round(daily.temp.max),
        mean: extractMeanValue(daily.temp),
        median: extractMedianValue(daily.temp),
      };
    });
};

const extractMeanValue = (temp: Temp) => {
  return Math.round((temp.morn + temp.day + temp.eve + temp.night) / 4);
};

const extractMedianValue = (temp: Temp) => {
  const temperatureArray = [temp.morn, temp.day, temp.eve, temp.night].sort((a, b) => a - b);
  return Math.round((temperatureArray[1] + temperatureArray[2]) / 2);
};
