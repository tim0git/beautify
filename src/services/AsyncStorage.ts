import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (storageKey: string, value: string) => {
  try {
    await AsyncStorage.setItem(storageKey, value);
  } catch (e) {
    throw new Error(`Error unable to store ${storageKey} key and ${value} value`);
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    throw new Error('Error unable clear all values from Async Storage');
  }
};

export const getData = async (storageKey: string) => {
  try {
    return await AsyncStorage.getItem(storageKey);
  } catch (e) {
    throw new Error(`Error unable to get ${storageKey} from Async Storage`);
  }
};
