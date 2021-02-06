import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (storageKey: string, value: string) => {
  try {
    await AsyncStorage.setItem(storageKey, value);
  } catch (e) {
    return Error(e);
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    return Error(e);
  }
};

export const getData = async (storageKey: string) => {
  try {
    return await AsyncStorage.getItem(storageKey);
  } catch (e) {
    return Error(`Error unable to get ${storageKey} from Async Storage`);
  }
};
