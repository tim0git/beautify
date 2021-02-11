import {size} from '../../../global/styles';
export const style = {
  container: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 0,
    margin: 0,
  },
  carouselContainer: {
    flex: 1,
    alignSelf: 'stretch',
    paddingVertical: size.padding.sm,
  },
  carouselCardContainer: {
    flex: 1,
    alignSelf: 'stretch',
  },
  dotStyle: {
    width: 20,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 1,
    backgroundColor: 'black',
  },
  inactiveDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 2,
    backgroundColor: 'grey',
  },
  inactiveDotOpacity: 0.4,
  inactiveDotScale: 0.8,
};
