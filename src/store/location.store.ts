import { makeAutoObservable, runInAction } from 'mobx';
import { Location } from '../model/interfaces/location';
import { LocationService } from '../services/location.service';

class LocationStore {
  cords: Location | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCurrentLocation = async () => {
    let location = await LocationService.getCustomLocation();
    if (!location) {
      location = await LocationService.getCurrentLocation();
    }
    runInAction(() => {
      this.cords = location;
    });
  };
}

export default LocationStore;
