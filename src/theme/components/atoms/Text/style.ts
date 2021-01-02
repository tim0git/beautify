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
    MenuTitle: {
      alignSelf: 'flex-start',
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
    MenuTitle: {
      ...typography.menuTitle,
      color: colors.text.primary,
    },
  },
};
