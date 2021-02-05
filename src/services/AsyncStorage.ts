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

export const getOnboardingStatus = async (storageKey: string) => {
  try {
    const value = await AsyncStorage.getItem(storageKey);

    if (value !== null) {
      return value; // 'complete'
    }

    return 'incomplete';
  } catch (e) {
    return Error('Error unable to get onboardingStatus from Async Storage');
  }
};
