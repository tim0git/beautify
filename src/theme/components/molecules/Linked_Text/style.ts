import {typography, colors} from '../../../global/styles';
export const style = {
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  textBeforeLink: {
    ...typography.body,
    color: colors.text.primary,
  },
  linkText: {
    ...typography.body,
    color: colors.text.link,
    textDecorationLine: 'underline',
  },
  textAfterLink: {
    ...typography.body,
    color: colors.text.primary,
  },
};
