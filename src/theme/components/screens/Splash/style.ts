import {colors, typography} from '../../../global/styles';

export const style = {
  pageWrapper: {
    flexGrow: 1,
    backgroundColor: colors.background.splash,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  splashText: {
    ...typography.splash,
    paddingLeft: 12,
    color: colors.text.splash,
  },
};
