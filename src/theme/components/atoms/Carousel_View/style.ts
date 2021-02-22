import {size, colors} from '../../../global/styles';
export const style = {
  container: {
    flex: 1,
    alignSelf: 'stretch',
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
    width: 15,
    height: 6,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: colors.carouselPagination.active,
  },
  inactiveDotStyle: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: colors.carouselPagination.inactive,
  },
  inactiveDotOpacity: 0.4,
  inactiveDotScale: 0.8,
};
