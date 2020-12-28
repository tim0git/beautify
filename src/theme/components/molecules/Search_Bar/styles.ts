import {size, colors, shadows} from '../../../global/styles';

export const styles = {
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    padding: size.padding.md,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.background.primary,
    ...shadows.box.small,
  },
  iconContainer: {
    padding: size.padding.xxs,
  },
  textInputContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: size.padding.xxs,
  },
  textInput: {
    alignSelf: 'stretch',
    flexGrow: 1,
  },
  buttonContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: size.padding.sm,
  },
};
