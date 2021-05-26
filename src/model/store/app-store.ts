import LocationStore from '../../store/location.store';
import WeatherInfoStore from '../../store/weather-info.store';

export interface IAppStore {
  location: LocationStore;
  weatherInfo: WeatherInfoStore;
}
