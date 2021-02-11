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
    width: 20,
    height: 10,
    borderRadius: 5,
    marginHorizontal: size.margin.xxs,
    backgroundColor: colors.carouselPagination.active,
  },
  inactiveDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: size.margin.xxs,
    backgroundColor: colors.carouselPagination.inactive,
  },
  inactiveDotOpacity: 0.4,
  inactiveDotScale: 0.8,
};
