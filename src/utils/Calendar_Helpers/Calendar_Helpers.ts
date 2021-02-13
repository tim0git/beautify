/**
 * @name Calendar_Helpers
 * @description {description}
 * @param {*} arg
 * @returns {number}
 * @example
 * Calendar_Helpers()
 *
 */
import moment from 'moment';

export const getDisabledDates = (startDate: string, endDate: string, daysToDisable: Array<number>) => {
  if (!startDate || !endDate || !daysToDisable) {
    return {};
  }
  const disabledDates: any = {};
  const start = moment(startDate);
  const end = moment(endDate);

  for (let m = moment(start); m.diff(end, 'days') <= 0; m.add(1, 'days')) {
    if (daysToDisable.includes(m.weekday())) {
      disabledDates[m.format('YYYY-MM-DD')] = {disabled: true};
    }
  }
  return disabledDates;
};

export const getMarkedDates = (propsObject: {selectedDay: any}) => {
  if (!propsObject) {
    return {};
  }
  const {selectedDay} = propsObject;
  return {
    ...selectedDay,
    ...getDisabledDates('2021-01-01', '2021-11-28', [0, 3]),
  };
};

export const getDisabledDaysIndexes = () => {
  return [2, 6];
};

export const formatXDateToString = (date: XDate, expectedFormat: string): string => {
  if (!date || !expectedFormat) {
    return '';
  }
  return moment(date.toString()).format(expectedFormat);
};
