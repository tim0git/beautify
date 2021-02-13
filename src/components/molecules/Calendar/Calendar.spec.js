import * as React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Calendar from './Calendar';
import MockDate from 'mockdate';
import {ThemeProvider} from '../../../services/ThemeProvider';

const defaultProps = {};

const testIdProps = {
  testID: 'TEST_CALENDAR_TEST_ID',
};

describe('<Calendar />', () => {
  describe('<Render>', () => {
    test('should render a calendar component', () => {
      const wrapper = shallow(<Calendar {...defaultProps} />);
      const calendar = wrapper.findWhere((node) => node.prop('testID') === 'Calendar');
      expect(calendar).toExist();
    });
  });
  describe('<Props> -Calendar', () => {
    test('should receive a testID if one is passed as a prop', () => {
      const wrapper = shallow(<Calendar {...testIdProps} />);
      const calendar = wrapper.findWhere((node) => node.prop('testID') === testIdProps.testID);
      expect(calendar).toExist();
    });
    test('should receive the following method props', () => {
      const wrapper = shallow(<Calendar {...defaultProps} />);
      const calendar = wrapper.findWhere((node) => node.prop('testID') === 'Calendar');
      const calendarProps = calendar.props();

      expect(calendarProps).toHaveProperty('theme');
      expect(calendarProps).toHaveProperty('style');
      expect(calendarProps).toHaveProperty('renderHeader');
      expect(calendarProps).toHaveProperty('onPressArrowRight');
      expect(calendarProps).toHaveProperty('onPressArrowLeft');
      expect(calendarProps).toHaveProperty('renderArrow');
      expect(calendarProps).toHaveProperty('onMonthChange');
      expect(calendarProps).toHaveProperty('onDayPress');
      expect(calendarProps).toHaveProperty('markedDates');
      expect(calendarProps).toHaveProperty('disabledDaysIndexes');
    });
    test('should receive the following style props', () => {
      const wrapper = shallow(<Calendar {...defaultProps} />);
      const calendar = wrapper.findWhere((node) => node.prop('testID') === 'Calendar');
      const calendarProps = calendar.props();

      expect(calendarProps).toHaveProperty('theme');
      expect(calendarProps).toHaveProperty('style');
    });
    test('should receive the following config props', () => {
      const wrapper = shallow(<Calendar {...defaultProps} />);
      const calendar = wrapper.findWhere((node) => node.prop('testID') === 'Calendar');
      const calendarProps = calendar.props();

      expect(calendarProps).toHaveProperty('current');
      expect(calendarProps).toHaveProperty('minDate');
      expect(calendarProps).toHaveProperty('maxDate');
      expect(calendarProps).toHaveProperty('hideArrows', false);
      expect(calendarProps).toHaveProperty('hideExtraDays', true);
      expect(calendarProps).toHaveProperty('disableMonthChange', true);
      expect(calendarProps).toHaveProperty('firstDay', 1);
      expect(calendarProps).toHaveProperty('hideDayNames', false);
      expect(calendarProps).toHaveProperty('showWeekNumbers', false);
      expect(calendarProps).toHaveProperty('disableArrowLeft', false);
      expect(calendarProps).toHaveProperty('disableArrowRight', false);
      expect(calendarProps).toHaveProperty('disableAllTouchEventsForDisabledDays', true);
      expect(calendarProps).toHaveProperty('enableSwipeMonths', false);
      expect(calendarProps).toHaveProperty('markingType', 'custom');
    });
  });
  describe('<Methods>', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    test('should call setSelectedDay when a day is selected', () => {
      /**
       * Mock useState hook
       */
      const setState = jest.fn();
      const useStateMock = (initState) => [initState, setState];
      jest.spyOn(React, 'useState').mockImplementation(useStateMock);

      /**
       * Test
       */
      const mockCalendarDateObject = {dateString: () => 'MOCK DATE'};

      const wrapper = shallow(<Calendar {...defaultProps} />);
      const calendar = wrapper.findWhere((node) => node.prop('testID') === 'Calendar');

      calendar.props().onDayPress(mockCalendarDateObject);

      expect(setState).toHaveBeenCalledTimes(1);
    });
    test('should call setSelectedDay with a selected date key value pair', () => {
      const {style} = ThemeProvider('Calendar');
      /**
       * Mock useState hook
       */
      const setState = jest.fn();
      const useStateMock = (initState) => [initState, setState];
      jest.spyOn(React, 'useState').mockImplementation(useStateMock);

      /**
       * Test
       */
      const mockCalendarDateObject = {
        get dateString() {
          return 'MOCK DATE';
        },
      };

      const wrapper = shallow(<Calendar {...defaultProps} />);
      const calendar = wrapper.findWhere((node) => node.prop('testID') === 'Calendar');

      calendar.props().onDayPress(mockCalendarDateObject);

      expect(setState).toHaveBeenCalledWith({[mockCalendarDateObject.dateString]: style.date.selected});
    });
    test('should call setShowBackArrow when onMonthChange is called', () => {
      /**
       * Mock useState hook
       */
      const setState = jest.fn();
      const useStateMock = (initState) => [initState, setState];
      jest.spyOn(React, 'useState').mockImplementation(useStateMock);

      /**
       * Test
       */
      const mockCalendarDateObject = {year: 2020, month: 1, day: 1, timestamp: 1234567890, dateString: '2020-01-01'};

      const wrapper = shallow(<Calendar {...defaultProps} />);
      const calendar = wrapper.findWhere((node) => node.prop('testID') === 'Calendar');

      calendar.props().onMonthChange(mockCalendarDateObject);

      expect(setState).toHaveBeenCalledTimes(1);
    });
    test('should call setShowBackArrow with false when date passed in is equal to the month date of the current calendar.', () => {
      /**
       * Mock useState hook
       */
      const setState = jest.fn();
      const useStateMock = (initState) => [initState, setState];
      jest.spyOn(React, 'useState').mockImplementation(useStateMock);

      /**
       * Mock Date
       */
      MockDate.set('2021-01-01');

      /**
       * Test
       */
      const mockCalendarDateObject = {year: 2020, month: 1, day: 1, timestamp: 1609502400, dateString: '2020-01-01'};

      const wrapper = shallow(<Calendar {...defaultProps} />);
      const calendar = wrapper.findWhere((node) => node.prop('testID') === 'Calendar');

      calendar.props().onMonthChange(mockCalendarDateObject);
      expect(new Date().toDateString()).toBe('Fri Jan 01 2021');
      expect(setState).toHaveBeenCalledWith(false);
      MockDate.reset();
    });
    test('should call setShowBackArrow with true when date passed in is NOT equal to the month date of the current calendar.', () => {
      /**
       * Mock useState hook
       */
      const setState = jest.fn();
      const useStateMock = (initState) => [initState, setState];
      jest.spyOn(React, 'useState').mockImplementation(useStateMock);

      /**
       * Mock Date
       */
      MockDate.set('2021-01-01');

      /**
       * Test
       */
      const mockCalendarDateObject = {year: 2020, month: 2, day: 1, timestamp: 1609502400, dateString: '2020-01-01'};

      const wrapper = shallow(<Calendar {...defaultProps} />);
      const calendar = wrapper.findWhere((node) => node.prop('testID') === 'Calendar');

      calendar.props().onMonthChange(mockCalendarDateObject);
      expect(new Date().toDateString()).toBe('Fri Jan 01 2021');
      expect(setState).toHaveBeenCalledWith(true);
      MockDate.reset();
    });
  });
});
