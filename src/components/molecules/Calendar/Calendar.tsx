/**
 * @name Calendar
 * @description {description}
 *
 */
import React, {useState} from 'react';
import {View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import {Calendar as CalendarWix} from 'react-native-calendars';
import IconRN from '../../atoms/Icon/Icon';

export interface Props {}
const Calendar: React.FC<Props> = ({}) => {
  const {config, style} = ThemeProvider('Calendar');
  const [selectedDay, setSelectedDay] = useState({});

  const {calendarProps, iconProps} = config;

  return (
    <View style={style.container} testID="Calendar">
      <CalendarWix
        {...calendarProps}
        markedDates={{
          ...selectedDay,
          '2021-01-25': style.date.disabled,
        }}
        onDayPress={(day) => {
          setSelectedDay({[day.dateString]: style.date.selected});
        }}
        onMonthChange={(month) => {
          console.log('month changed', month);
        }}
        renderArrow={(direction) => <IconRN {...iconProps[direction]} color={style.arrowColor} />}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
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
