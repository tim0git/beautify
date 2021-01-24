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
import Header from '../../atoms/Header/Header';
import {calendarDateObject} from './Calendar.types';
import {
  formatXDateToString,
  getDisabledDaysIndexes,
  getMarkedDates,
} from '../../../utils/Calendar_Helpers/Calendar_Helpers';

export interface Props {}
const Calendar: React.FC<Props> = ({}) => {
  const {config, style} = ThemeProvider('Calendar');
  const [selectedDay, setSelectedDay] = useState<object>({});
  const [showBackArrow, setShowBackArrow] = useState<boolean>(false);
  const {calendarProps, iconProps, headerFormat} = config;

  const renderHeader = (date: XDate) => {
    return <Header headerText={formatXDateToString(date, headerFormat)} type="Calendar" backButton={false} />;
  };

  const renderArrow = (direction: string) => {
    if (direction === 'left' && showBackArrow) {
      return <IconRN {...iconProps[direction]} color={style.arrowColor} />;
    }
    if (direction === 'right') {
      return <IconRN {...iconProps[direction]} color={style.arrowColor} />;
    }
  };

  const onMonthChange = (month: calendarDateObject) => {
    setShowBackArrow(new Date().getMonth() + 1 !== month.month);
  };

  const onDayPress = (day: calendarDateObject) => {
    setSelectedDay({[day.dateString]: style.date.selected});
  };

  return (
    <View style={style.container}>
      <CalendarWix
        testID="Calendar"
        {...calendarProps}
        disabledDaysIndexes={getDisabledDaysIndexes()}
        markedDates={getMarkedDates({selectedDay})}
        onDayPress={onDayPress}
        onMonthChange={onMonthChange}
        renderArrow={renderArrow}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        renderHeader={renderHeader}
        style={style.calendar}
        theme={style.theme}
      />
    </View>
  );
};

export default Calendar;
