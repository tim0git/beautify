import {typography, colors, shadows} from '../../../global/styles';
export const style = {
  container: {
    flexGrow: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignitems: 'center',
  },
  date: {
    selected: {
      customStyles: {
        container: {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.button.primary,
          ...shadows.box.small,
          borderRadius: 4,
        },
        text: {
          ...typography.body,
          color: colors.text.primary,
        },
      },
    },
    disabled: {
      disabled: true,
    },
  },
  calendar: {
    // No styles applied
  },
  theme: {
    // backgroundColor: '#ffffff',
    // calendarBackground: '#ffffff',
    // textSectionTitleColor: '#b6c1cd',
    // textSectionTitleDisabledColor: '#d9e1e8',
    // selectedDayBackgroundColor: '#00adf5',
    // selectedDayTextColor: '#ffffff',
    todayTextColor: colors.text.tertiary,
    dayTextColor: colors.text.primary,
    textDisabledColor: '#d9e1e8',
    // dotColor: '#00adf5',
    // selectedDotColor: '#ffffff',
    // arrowColor: 'orange',
    // disabledArrowColor: '#d9e1e8',
    // monthTextColor: 'blue',
    // indicatorColor: 'blue',
    // textDayFontFamily: 'monospace',
    // textMonthFontFamily: 'monospace',
    // textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: '500',
    // textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '500',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 12,
  },
};
