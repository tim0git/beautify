import {size, colors, border} from '../../../global/styles';
export const style = {
  container: {
    Screen: {
      alignSelf: 'stretch',
      paddingVertical: size.padding.lg,
      ...border.bottomPrimary,
      borderBottomColor: colors.border.primary,
      flexDirection: 'row',
    },
    Menu: {
      alignSelf: 'stretch',
      justifyContent: 'flex-start',
      paddingVertical: size.padding.lg,
      backgroundColor: colors.background.menuHeader,
    },
    Calendar: {
      alignSelf: 'stretch',
      justifyContent: 'flex-start',
    },
  },
  titleContainer: {
    Screen: {
      true: {
        flex: 0.8,
        justifyContent: 'center',
        paddingRight: size.padding.xs,
      },
      false: {
        flex: 1,
        justifyContent: 'center',
      },
    },
    Menu: {
      // no styles applied
    },
    Calendar: {
      // no styles applied
    },
  },
  backButtonContainer: {
    paddingLeft: size.padding.xs,
    flex: 0.1,
  },
  skipButtonContainer: {
    paddingRight: size.padding.xs,
    flex: 0.3,
  },
};
