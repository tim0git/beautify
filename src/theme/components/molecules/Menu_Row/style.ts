import {size, shadows, colors, typography} from '../../../global/styles';
export const style = {
  wrapper: {
    Switch: {
      alignSelf: 'stretch',
    },
  },
  container: {
    Switch: {
      alignSelf: 'stretch',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: size.padding.sm,
      paddingHorizontal: size.padding.sm,
      borderBottomColor: colors.border.primary,
      borderBottomWidth: 1 / 2,
    },
  },
  text: {
    Switch: {
      ...typography.buttons.menu,
      color: colors.text.primary,
    },
  },
};
