import {size, typography, shadows, colors} from '../../../global/styles';

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
  },
  container: {
    default: {
      alignSelf: 'stretch',
      justifyContent: 'center',
      paddingVertical: size.padding.xxs,
      borderRadius: 3,
      borderColor: 'black',
      borderWidth: colors.border.black,
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
  },
  text: {
    default: {
      alignSelf: 'center',
    },
    NoBorder: {
      alignSelf: 'center',
      color: 'grey',
      fontWeight: '500',
    },
    SearchBar: {
      alignSelf: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text.tertiary,
    },
    Primary: {
      alignSelf: 'flex-start',
      fontSize: 22,
      fontWeight: '500',
      color: colors.text.primary,
    },
  },
};
