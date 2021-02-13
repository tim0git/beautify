/**
 * @name Carousel_View
 * @description {description}
 *
 */
import React, {useState} from 'react';
import {View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {CarouselComponent, Item, NativeEvent, OnboardingCard} from './Carousel_View.types';

export interface Props {
  carouselData: Array<OnboardingCard>;
  carouselComponent: CarouselComponent;
  showPagination: boolean;
  testID: string;
}

const Carousel_View: React.FC<Props> = ({carouselData = [], carouselComponent, showPagination, testID}) => {
  const {style} = ThemeProvider('Carousel_View');
  const [carouselDimensions, setCarouselDimension] = useState({width: 10, height: 10});
  const [cardIndex, setCardIndex] = useState(0);

  const handleLayout = (event: NativeEvent) => {
    const {width, height} = event.nativeEvent.layout;
    setCarouselDimension({width, height});
  };

  const renderItem = ({item}: Item) => {
    return <View style={style.carouselCardContainer}>{carouselComponent(item)}</View>;
  };

  return (
    <View style={style.container}>
      <View style={style.carouselContainer} testID="Carousel_View" onLayout={handleLayout}>
        <Carousel
          testID={testID ? testID : 'Carousel_View_Carousel'}
          layout={'default'}
          data={carouselData}
          renderItem={renderItem}
          sliderWidth={carouselDimensions.width}
          itemWidth={carouselDimensions.width * 0.95}
          onSnapToItem={(index) => setCardIndex(index)}
        />
      </View>
      {showPagination && (
        <View style={style.paginationContainer}>
          <Pagination
            dotsLength={carouselData.length}
            activeDotIndex={cardIndex}
            containerStyle={{}}
            dotStyle={style.dotStyle}
            inactiveDotStyle={style.inactiveDotStyle}
            inactiveDotOpacity={style.inactiveDotOpacity}
            inactiveDotScale={style.inactiveDotScale}
          />
        </View>
      )}
    </View>
  );
};

export default Carousel_View;
