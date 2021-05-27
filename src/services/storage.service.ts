import AsyncStorage from '@react-native-async-storage/async-storage';

enum StorageKey {
  CUSTOM_LOCATION = 'customLocation',
}

export class StorageService {
  private static getItem = async (key: string): Promise<string | null> => {
    return await AsyncStorage.getItem(key);
  };
  private static setItem = async (key: string, value: string): Promise<void> => {
    return await AsyncStorage.setItem(key, value);
  };
  private static clearItem = async (key: string): Promise<void> => {
    return await AsyncStorage.removeItem(key);
  };

  static customLocation = {
    getValue: async (): Promise<string | null> => {
      return StorageService.getItem(StorageKey.CUSTOM_LOCATION);
    },
    setValue: async (location: string): Promise<void> => {
      return await StorageService.setItem(StorageKey.CUSTOM_LOCATION, location);
    },
    clear: async (): Promise<void> => {
      return await StorageService.clearItem(StorageKey.CUSTOM_LOCATION);
    },
  };
}
