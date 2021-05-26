import { Location } from '../model/interfaces/location';
import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';
import { StorageService } from './storage.service';

export class LocationService {
  public static getCurrentLocation = async (): Promise<Location | null> => {
    try {
      const geolocationResponse = await LocationService.getCurrentPosition();
      return {
        lat: geolocationResponse.coords.latitude,
        lon: geolocationResponse.coords.longitude,
      };
    } catch (e) {
      // TODO: add logger
      return null;
    }
  };

  public static saveCustomLocation = async (location: Location) => {
    await StorageService.customLocation.setValue(location);
  };

  public static getCustomLocation = async (): Promise<Location | null> => {
    return await StorageService.customLocation.getValue();
  };

  public static clearCustomLocation = async () => {
    await StorageService.customLocation.clear();
  };

  private static getCurrentPosition = (): Promise<GeolocationResponse> => {
    return new Promise<GeolocationResponse>((resolve, reject) => {
      Geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error),
      );
    });
  };
}
