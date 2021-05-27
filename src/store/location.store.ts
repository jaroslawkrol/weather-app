import { makeAutoObservable, runInAction } from 'mobx';
import { LocationService } from '../services/location.service';
import { Address } from '../model/interfaces/address';
import { AddressService } from '../services/address.service';

class LocationStore {
  isBusy = false;
  error = false;
  address: Address | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchLocation = async () => {
    this.isBusy = true;
    try {
      let address: Address | null = null;
      const customLocation = await LocationService.getCustomLocation();
      if (customLocation) {
        address = await AddressService.fetchAddressByCityName(customLocation);
      } else {
        const coords = await LocationService.getCurrentLocation();
        address = await AddressService.fetchAddressByCurrentPositionOrReturnDefaultAddress(coords);
      }
      runInAction(() => {
        this.address = address;
      });
    } catch (e) {
      this.address = null;
      this.error = true;
    } finally {
      this.isBusy = false;
    }
  };

  setCustomLocation = async (cityName: string) => {
    const address: Address | null = await AddressService.fetchAddressByCityName(cityName);
    await LocationService.saveCustomLocation(cityName);
    runInAction(() => {
      this.address = address;
    });
  };

  setCurrentLocation = async () => {
    const coords = await LocationService.getCurrentLocation();
    const address: Address | null =
      await AddressService.fetchAddressByCurrentPositionOrReturnDefaultAddress(coords);
    await LocationService.clearCustomLocation();
    runInAction(() => {
      this.address = address;
    });
  };
}

export default LocationStore;
