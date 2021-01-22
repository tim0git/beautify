/**
 * @name Calendar
 * @description {description}
 *
 */
import React from 'react';
import {View, Text} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import {Calendar as CalendarWix} from 'react-native-calendars';
// import moment from 'moment';

export interface Props {}
const Calendar: React.FC<Props> = ({}) => {
  const {config, dict, style} = ThemeProvider('Calendar');
  const {calendarProps} = config;

  return (
    <View style={style.container} testID="Calendar">
      <CalendarWix
        {...calendarProps}
        markedDates={{
          '2021-01-25': style.date.disabled,
          '2021-01-23': style.date.selected,
          // '2021-01-28': {disabled: true, startingDay: true, color: 'pink', endingDay: true},
        }}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {
          console.log('selected day', day);
        }}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {
          console.log('month changed', month);
        }}
        // // Replace default arrows with custom ones (direction can be 'left' or 'right')
        // renderArrow={(direction) => <Arrow />}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={(addMonth) => addMonth()}
        // Replace default month and year title with custom one. the function receive a date as parameter.
        // renderHeader={(date) => {
        //   /*Return JSX*/
        // }}
        style={style.calendar}
        theme={style.theme}
      />
    </View>
  );
};

export default Calendar;
