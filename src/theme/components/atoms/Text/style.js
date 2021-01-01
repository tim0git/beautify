import {typography, colors} from '../../../global/styles';

export const style = {
  container: {
    Title: {
      alignSelf: 'stretch',
    },
    SubTitle: {
      alignSelf: 'stretch',
    },
    Body: {
      alignSelf: 'stretch',
    },
    Caption: {
      alignSelf: 'stretch',
    },
    ScreenTitle: {
      alignSelf: 'stretch',
    },
  },
  text: {
    Title: {
      ...typography.instruction,
      color: colors.text.instruction,
    },
    SubTitle: {
      ...typography.subtitle,
      color: colors.text.subtitle,
    },
    Body: {
      ...typography.body,
      color: colors.text.primary,
    },
    Caption: {
      ...typography.caption,
      color: colors.text.primary,
    },
    ScreenTitle: {
      ...typography.screenTitle,
      color: colors.text.primary,
    },
  },
};
