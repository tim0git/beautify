import {Dimensions} from 'react-native';
export const styles = {
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
  },
  searchBarButtonContainer: {
    flex: 1 / 4,
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    paddingHorizontal: 16,
  },
};
