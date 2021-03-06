import { Coords } from '../model/interfaces/coords';
import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';
import { StorageService } from './storage.service';

export class LocationService {
  public static getCurrentLocation = async (): Promise<Coords | null> => {
    try {
      const geolocationResponse = await LocationService.getCurrentPosition();
      return {
        lat: geolocationResponse.coords.latitude,
        lon: geolocationResponse.coords.longitude,
      };
    } catch (e) {
      return null;
    }
  };

  public static saveCustomLocation = async (location: string): Promise<void> => {
    await StorageService.customLocation.setValue(location);
  };

  public static getCustomLocation = async (): Promise<string | null> => {
    return await StorageService.customLocation.getValue();
  };

  public static clearCustomLocation = async (): Promise<void> => {
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
