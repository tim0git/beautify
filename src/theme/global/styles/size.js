import {Dimensions} from 'react-native';

export const size = {
  Screen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  padding: {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 18,
    xlg: 22,
    xxlg: 36,
    xxxlg: 64,
  },
  margin: {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 18,
    xlg: 22,
    xxlg: 28,
    xxxlg: 36,
  },
};
