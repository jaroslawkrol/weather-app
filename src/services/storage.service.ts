import AsyncStorage from '@react-native-async-storage/async-storage';
import { Location } from '../model/interfaces/location';

enum StorageKey {
  CUSTOM_LOCATION = 'customLocation',
}

export class StorageService {
  private static getItem = async (key: string) => {
    return await AsyncStorage.getItem(key);
  };
  private static setItem = async (key: string, value: string) => {
    return await AsyncStorage.setItem(key, value);
  };
  private static clearItem = async (key: string) => {
    return await AsyncStorage.removeItem(key);
  };

  static customLocation = {
    getValue: async (): Promise<Location | null> => {
      const response = await StorageService.getItem(StorageKey.CUSTOM_LOCATION);
      return response ? <Location>JSON.parse(response) : null;
    },
    setValue: async (location: Location) => {
      return await StorageService.setItem(StorageKey.CUSTOM_LOCATION, JSON.stringify(location));
    },
    clear: async () => {
      return await StorageService.clearItem(StorageKey.CUSTOM_LOCATION);
    },
  };
}
