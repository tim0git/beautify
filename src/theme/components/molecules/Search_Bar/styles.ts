import {size} from '../../../global/styles';

export const styles = {
  container: {
    padding: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    flexDirection: 'row',
  },
  iconContainer: {
    padding: 4,
  },
  textInputContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 4,
  },
  textInput: {
    alignSelf: 'stretch',
    flexGrow: 1,
  },
  buttonContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 12,
  },
};
