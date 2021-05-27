import { Coords } from '../model/interfaces/coords';
import { makeAutoObservable, runInAction } from 'mobx';
import { WeatherService } from '../services/weather.service';
import { DailyWeather } from '../model/interfaces/daily-weather';

class WeatherInfoStore {
  isBusy = false;
  error = false;
  dailyWeathers: DailyWeather[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchWeatherInfoByCoords = async (coords: Coords): Promise<void> => {
    this.isBusy = true;
    this.error = false;
    try {
      const dailyWeathers = await WeatherService.fetchWeatherByCoords(coords);
      runInAction(() => {
        this.dailyWeathers = dailyWeathers;
      });
    } catch (e) {
      this.dailyWeathers = [];
      this.error = true;
    } finally {
      this.isBusy = false;
    }
  };
}

export default WeatherInfoStore;
