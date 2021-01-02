import {size, shadows, colors, typography} from '../../../global/styles';

export const styles = {
  wrapper: {
    default: {
      alignSelf: 'stretch',
    },
    NoBorder: {
      alignSelf: 'stretch',
    },
    SearchBar: {
      alignSelf: 'stretch',
    },
    Primary: {
      alignSelf: 'stretch',
    },
    Secondary: {
      alignSelf: 'center',
    },
  },
  container: {
    default: {
      alignSelf: 'stretch',
      justifyContent: 'center',
      paddingVertical: size.padding.xxs,
      borderRadius: 3,
      borderColor: colors.border.black,
      borderWidth: 1,
    },
    NoBorder: {
      alignSelf: 'stretch',
      justifyContent: 'center',
      paddingVertical: size.padding.xxs,
    },
    SearchBar: {
      alignSelf: 'stretch',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: size.padding.xxs,
      backgroundColor: colors.background.primary,
      ...shadows.box.small,
    },
    Primary: {
      alignSelf: 'stretch',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: size.padding.md,
      paddingHorizontal: size.padding.lg,
      backgroundColor: colors.button.primary,
      borderRadius: 3,
      ...shadows.box.small,
    },
    Secondary: {
      alignSelf: 'stretch',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  text: {
    default: {
      alignSelf: 'center',
    },
    NoBorder: {
      alignSelf: 'center',
      color: 'grey',
      ...typography.buttons.noBorder,
    },
    SearchBar: {
      ...typography.buttons.searchBar,
      color: colors.text.tertiary,
    },
    Primary: {
      ...typography.buttons.primary,
      color: colors.text.primary,
    },
    Secondary: {
      ...typography.buttons.secondary,
      color: colors.text.secondary,
    },
  },
};
