import {size, typography, colors} from '../../../global/styles';

export const styles = {
  type: {
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
  },
  textAlign: {
    center: {
      alignSelf: 'center',
      color: 'grey',
      fontWeight: '500',
    },
  },
};
