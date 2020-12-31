import {typography, colors} from '../../../global/styles';

export const style = {
  container: {
    Title: {
      alignSelf: 'stretch',
    },
    SubTitle: {
      alignSelf: 'stretch',
    },
  },
  text: {
    Title: {
      ...typography.title,
      color: colors.text.title,
    },
    SubTitle: {
      ...typography.subtitle,
      color: colors.text.subtitle,
    },
  },
};
