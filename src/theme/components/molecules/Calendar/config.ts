import moment from 'moment';
export const config = {
  calendarProps: {
    // Initially visible month. Default = Date()
    current: moment().format('YYYY-MM-DD'),
    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
    minDate: moment().format('YYYY-MM-DD'),
    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
    maxDate: moment().add(90, 'days').calendar(),
    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
    monthFormat: 'MMMM YYYY',
    // Hide month navigation arrows. Default = false
    hideArrows: false,
    // Do not show days of other months in month page. Default = false
    hideExtraDays: true,
    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
    // day from another month that is visible in calendar page. Default = false
    disableMonthChange: true,
    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
    firstDay: 1,
    // Hide day names. Default = false
    hideDayNames: false,
    // Show week numbers to the left. Default = false
    showWeekNumbers: false,
    // Disable left arrow. Default = false
    disableArrowLeft: false,
    // Disable right arrow. Default = false
    disableArrowRight: false,
    // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
    disableAllTouchEventsForDisabledDays: true,
    // Enable the option to swipe between months. Default = false
    enableSwipeMonths: false,
    // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
    markingType: 'custom',
  },
  iconProps: {
    left: {
      name: 'ArrowLeft',
      size: 25,
    },
    right: {
      name: 'ArrowRight',
      size: 25,
    },
  },
};
