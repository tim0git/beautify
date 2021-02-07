/**
 * @name Carousel_View
 * @description {description}
 *
 */
import React from 'react';
import {View, Text} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {}

const Carousel_View: React.FC<Props> = ({}) => {
  const {style} = ThemeProvider('Carousel_View');
  return (
    <View style={style.container} testID="Carousel_View">
      <Text>Carousel_View</Text>
    </View>
  );
};

export default Carousel_View;
