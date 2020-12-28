import {colors, size} from '../../../global/styles';
export const styles = {
  pageWrapper: {
    flexGrow: 1,
    backgroundColor: colors.background.primary,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
  },
  searchBarButtonContainer: {
    flex: 1 / 4,
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    paddingHorizontal: size.padding.md,
  },
};
