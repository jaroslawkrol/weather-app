import weatherRepository from '../api/repositories/weather.repository';
import { Coords } from '../model/interfaces/coords';
import { DailyWeather } from '../model/interfaces/daily-weather';

export class WeatherService {
  public static fetchWeatherByCoords = async (coords: Coords): Promise<DailyWeather[]> => {
    return await weatherRepository.fetchWeatherByCoords(coords.lat, coords.lon);
  };
}
