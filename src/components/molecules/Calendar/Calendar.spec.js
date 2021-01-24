import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Calendar from './Calendar';

const defaultProps = {};

describe('<Calendar />', () => {
  describe('<Render>', () => {
    test('should render a calendar component', () => {
      const wrapper = shallow(<Calendar {...defaultProps} />);
      const calendar = wrapper.findWhere((node) => node.prop('testID') === 'Calendar');
      expect(calendar).toExist();
    });
  });
  describe('<Props> -Calendar', () => {
    test('should recieve the following method props', () => {
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
    test('should recieve the following style props', () => {
      const wrapper = shallow(<Calendar {...defaultProps} />);
      const calendar = wrapper.findWhere((node) => node.prop('testID') === 'Calendar');
      const calendarProps = calendar.props();

      expect(calendarProps).toHaveProperty('theme');
      expect(calendarProps).toHaveProperty('style');
    });
    test('should recieve the following config props', () => {
      const wrapper = shallow(<Calendar {...defaultProps} />);
      const calendar = wrapper.findWhere((node) => node.prop('testID') === 'Calendar');
      const calendarProps = calendar.props();

      expect(calendarProps).toHaveProperty('current');
      expect(calendarProps).toHaveProperty('minDate');
      expect(calendarProps).toHaveProperty('maxDate');
      expect(calendarProps).toHaveProperty('monthFormat', 'MMMM YYYY');
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
});
