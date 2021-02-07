/**
 * @name Carousel
 * @description {description}
 *
 */
import React from 'react';
import {View, Text} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {}

const Carousel: React.FC<Props> = () => {
  const {style} = ThemeProvider('Carousel');
  return (
    <View style={style.container} testID="Carousel">
      <Text>Carousel</Text>
    </View>
  );
};

export default Carousel;
