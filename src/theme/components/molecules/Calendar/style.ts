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
    'stylesheet.calendar.header': {
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 6,
        alignItems: 'center',
        backgroundColor: colors.background.menuHeader,
      },
      headerContainer: {
        flexDirection: 'row',
      },
      week: {
        paddingTop: 7,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: colors.background.menuHeader,
      },
    },
    // backgroundColor: '',
    // calendarBackground: '',
    textSectionTitleColor: colors.text.primary,
    textSectionTitleDisabledColor: colors.text.disabled,
    // selectedDayBackgroundColor: '',
    // selectedDayTextColor: '',
    todayTextColor: colors.text.secondary,
    dayTextColor: colors.text.primary,
    textDisabledColor: colors.text.disabled,
    // dotColor: '',
    // selectedDotColor: '',
    // arrowColor: '',
    // disabledArrowColor: '',
    // monthTextColor: '',
    // indicatorColor: ' ',
    ...typography.calendar.theme,
  },
  arrowColor: colors.text.primary,
};
