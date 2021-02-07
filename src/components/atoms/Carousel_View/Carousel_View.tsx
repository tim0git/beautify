/**
 * @name Carousel_View
 * @description {description}
 *
 */
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Carousel, {Pagination} from 'react-native-snap-carousel';

export interface Props {}

const Carousel_View: React.FC<Props> = () => {
  const {style} = ThemeProvider('Carousel_View');
  const [carouselDimensions, setCarouselDimension] = useState({width: 10, height: 10});
  const [cardIndex, setCardIndex] = useState(0);

  const DATA = [{id: 1}, {id: 2}, {id: 3}];

  const handleLayout = (event: {nativeEvent: {layout: {width: number; height: number}}}) => {
    const {width, height} = event.nativeEvent.layout;
    setCarouselDimension({width, height});
  };

  const renderItem = ({item}) => {
    return (
      <View style={style.carouselCardContainer}>
        <Text style={style.renderedText}>{item.id}</Text>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <View style={style.carouselContainer} testID="Carousel_View" onLayout={handleLayout}>
        <Carousel
          layout={'default'}
          data={DATA}
          renderItem={renderItem}
          sliderWidth={carouselDimensions.width}
          itemWidth={carouselDimensions.width * 0.95}
          onSnapToItem={(index) => setCardIndex(index)}
        />
      </View>
      <View style={style.paginationContainer}>
        <Pagination
          dotsLength={DATA.length}
          activeDotIndex={cardIndex}
          containerStyle={{}}
          dotStyle={{
            width: 20,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 1,
            backgroundColor: 'black',
          }}
          inactiveDotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'grey',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  );
};

export default Carousel_View;
