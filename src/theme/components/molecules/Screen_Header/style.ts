import {size, colors, border} from '../../../global/styles';
export const style = {
  container: {
    Screen: {
      alignSelf: 'stretch',
      paddingVertical: size.padding.lg,
      ...border.bottomPrimary,
      borderBottomColor: colors.border.primary,
    },
    Menu: {
      alignSelf: 'stretch',
      justifyContent: 'flex-start',
      paddingVertical: size.padding.lg,
      backgroundColor: colors.background.menuHeader,
    },
  },
};
