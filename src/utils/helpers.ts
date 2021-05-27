import { WeatherCode } from '../model/enums/weather-code.enum';

export const extractFontistoIconNameByWeatherCode = (code: WeatherCode) => {
  switch (code) {
    case WeatherCode.THUNDERSTORM:
      return 'lightning';
    case WeatherCode.DRIZZLE:
    case WeatherCode.RAIN:
      return 'rain';
    case WeatherCode.SNOW:
      return 'snow';
    case WeatherCode.CLEAR:
      return 'day-sunny';
    case WeatherCode.CLOUDS:
      return 'cloudy';
    default:
      return 'fog';
  }
};
