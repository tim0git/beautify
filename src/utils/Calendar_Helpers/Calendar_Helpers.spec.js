import {getDisabledDates, getMarkedDates, getDisabledDaysIndexes, formatXDateToString} from './Calendar_Helpers';

describe('getDisabledDates', () => {
  it('Should return an object', () => {
    expect(typeof getDisabledDates()).toBe('object');
  });
});

describe('getMarkedDates', () => {
  it('Should return an object', () => {
    expect(typeof getMarkedDates()).toBe('object');
  });
});

describe('getDisabledDaysIndexes', () => {
  it('Should return an object', () => {
    const result = getDisabledDaysIndexes();
    expect(Array.isArray(result)).toBeTruthy();
  });
});

describe('formatXDateToString', () => {
  it('Should return a string', () => {
    expect(typeof formatXDateToString()).toBe('string');
  });
});
