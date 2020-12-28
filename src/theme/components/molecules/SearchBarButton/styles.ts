import {size, colors, shadows} from '../../../global/styles';

export const styles = {
  type: {
    default: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: size.padding.lg,
      paddingVertical: size.padding.xxs,
      backgroundColor: colors.background.primary,
      ...shadows.box.small,
    },
  },
  textAlign: {
    center: {
      alignSelf: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      color: '#696969',
    },
  },
};
