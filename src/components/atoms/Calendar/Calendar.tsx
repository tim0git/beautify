/**
 * @name Calendar
 * @description {description}
 *
 */
import React from 'react';
import {View, Text} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {}

const Calendar: React.FC<Props> = ({}) => {
  const {config, dict, style} = ThemeProvider('Calendar');
  return (
    <View style={style.container} testID="Calendar">
      <Text>Calendar</Text>
    </View>
  );
};

export default Calendar;
