import LocationStore from './location.store';
import WeatherInfoStore from './weather-info.store';

class AppStore {
  location = new LocationStore();
  weatherInfo = new WeatherInfoStore();
}

export default new AppStore();
