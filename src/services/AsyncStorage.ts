import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (storageKey: string, value: string) => {
  try {
    await AsyncStorage.setItem(storageKey, value);
  } catch (e) {
    Error(e);
  }
};

export const getData = async (storageKey: string) => {
  try {
    const value = await AsyncStorage.getItem(storageKey);
    if (value !== null) {
      return value;
    }
    return null;
  } catch (e) {
    Error(e);
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    Error(e);
  }
};
