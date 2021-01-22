import {typography, colors, shadows} from '../../../global/styles';
export const style = {
  container: {
    flexGrow: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignitems: 'stretch',
  },
  date: {
    selected: {
      customStyles: {
        container: {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.button.primary,
          ...shadows.box.medium,
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
    height: 350,
    // No styles applied
  },
  theme: {
    // backgroundColor: '',
    // calendarBackground: '',
    // textSectionTitleColor: '',
    // textSectionTitleDisabledColor: '',
    // selectedDayBackgroundColor: '',
    // selectedDayTextColor: '',
    todayTextColor: colors.text.secondary,
    dayTextColor: colors.text.primary,
    textDisabledColor: '',
    // dotColor: '',
    // selectedDotColor: '',
    // arrowColor: '',
    // disabledArrowColor: '',
    // monthTextColor: '',
    // indicatorColor: '',
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
  arrowColor: colors.text.primary,
};
