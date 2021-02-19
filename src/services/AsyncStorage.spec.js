import AsyncStorage from '@react-native-async-storage/async-storage';
import {storeData, clearAll, getData} from './AsyncStorage';

describe('<storeData>', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test('should call setItem when called', async () => {
    const mockSetItem = jest.fn();
    jest.spyOn(AsyncStorage, 'setItem').mockImplementationOnce(mockSetItem);
    storeData();
    expect(mockSetItem).toHaveBeenCalledTimes(1);
  });
  test('should call setItem with storageKey and value passed as arguments storeData', async () => {
    const mockSetItem = jest.fn();
    jest.spyOn(AsyncStorage, 'setItem').mockImplementationOnce(mockSetItem);
    const mockStorageKey = 'MOCK_STORAGE_KEY';
    const mockValue = 'MOCK_VALUE';
    storeData(mockStorageKey, mockValue);
    expect(mockSetItem).toHaveBeenCalledWith(mockStorageKey, mockValue);
  });
  test('should return an Error when setItem throws an Error', async () => {
    jest.spyOn(AsyncStorage, 'setItem').mockRejectedValueOnce(new Error('AsyncStorage error'));
    await expect(storeData()).rejects.toThrow();
  });
});

describe('<getData>', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test('should call getItem when called', async () => {
    const mockGetItem = jest.fn();
    jest.spyOn(AsyncStorage, 'getItem').mockImplementationOnce(mockGetItem);
    getData();
    expect(mockGetItem).toHaveBeenCalledTimes(1);
  });
  test('should call getItem with storageKey passed as argument to getData', async () => {
    const mockGetItem = jest.fn();
    jest.spyOn(AsyncStorage, 'getItem').mockImplementationOnce(mockGetItem);
    const mockStorageKey = 'MOCK_STORAGE_KEY';
    getData(mockStorageKey);
    expect(mockGetItem).toHaveBeenCalledWith(mockStorageKey);
  });
  test('should return an Error when getItem throws an Error', async () => {
    jest.spyOn(AsyncStorage, 'getItem').mockRejectedValueOnce(new Error('AsyncStorage error'));
    await expect(getData()).rejects.toThrow();
  });
});

describe('<clearAll>', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test('should call clearAll when called', async () => {
    const mockClear = jest.fn();
    jest.spyOn(AsyncStorage, 'clear').mockImplementationOnce(mockClear);
    clearAll();
    expect(mockClear).toHaveBeenCalledTimes(1);
  });
  test('should return an Error when clearAll throws an Error', async () => {
    jest.spyOn(AsyncStorage, 'clear').mockRejectedValueOnce(new Error('AsyncStorage error'));
    await expect(clearAll()).rejects.toThrow();
  });
});
