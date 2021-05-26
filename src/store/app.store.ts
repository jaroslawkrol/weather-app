import LocationStore from './location.store';

class AppStore {
  location = new LocationStore();
}

export default new AppStore();
