import AsyncStorage from '@react-native-community/async-storage';
import { from } from 'rxjs';

class StorageService {
  getItem(key: string) {
    return from(AsyncStorage.getItem(key));
  }

  setItem(key: string, item: any) {
    return from(AsyncStorage.setItem(key, item));
  }

  removeItem(key: string) {
    return from(AsyncStorage.removeItem(key));
  }
}

export const storageService = new StorageService();
