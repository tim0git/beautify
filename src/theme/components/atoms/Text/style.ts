import {typography, colors} from '../../../global/styles';

export const style = {
  container: {
    Instruction: {
      alignSelf: 'stretch',
    },
    Body: {
      alignSelf: 'stretch',
    },
    Caption: {
      alignSelf: 'stretch',
    },
    Title: {
      alignSelf: 'stretch',
    },
  },
  text: {
    Instruction: {
      ...typography.instruction,
      color: colors.text.instruction,
    },
    Body: {
      ...typography.body,
      color: colors.text.primary,
    },
    Caption: {
      ...typography.caption,
      color: colors.text.primary,
    },
    Title: {
      ...typography.title,
      color: colors.text.primary,
    },
  },
};
