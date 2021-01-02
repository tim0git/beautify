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
    Menu: {
      alignSelf: 'stretch',
    },
  },
  container: {
    default: {
      alignSelf: 'stretch',
      justifyContent: 'center',
      paddingVertical: size.padding.xxs,
      borderRadius: 5,
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
      paddingVertical: size.padding.sm,
      paddingHorizontal: size.padding.xlg,
      backgroundColor: colors.button.primary,
      borderColor: colors.button.primary,
      borderWidth: 1,
      borderRadius: 5,
      ...shadows.box.small,
    },
    Secondary: {
      alignSelf: 'stretch',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    Menu: {
      alignSelf: 'stretch',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: size.padding.sm,
      paddingHorizontal: size.padding.sm,
      borderBottomColor: colors.border.primary,
      borderBottomWidth: 1 / 2,
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
    Menu: {
      ...typography.buttons.menu,
      color: colors.text.primary,
    },
  },
  textContainer: {
    default: {},
    NoBorder: {},
    SearchBar: {},
    Primary: {},
    Secondary: {},
    Menu: {
      flexGrow: 1,
      justifyContent: 'flex-start',
      paddingHorizontal: size.padding.md,
    },
  },
};
