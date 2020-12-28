import {size, typography, shadows, colors} from '../../../global/styles';

export const styles = {
  container: {
    default: {
      alignSelf: 'stretch',
      justifyContent: 'center',
      paddingVertical: size.padding.xxs,
      borderRadius: 5,
      borderColor: 'black',
      borderWidth: 1,
    },
    NoBorder: {
      alignSelf: 'stretch',
      justifyContent: 'center',
      paddingVertical: size.padding.xxs,
    },
    SearchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: size.padding.lg,
      paddingVertical: size.padding.xxs,
      backgroundColor: colors.background.primary,
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
      color: '#696969',
    },
  },
};
