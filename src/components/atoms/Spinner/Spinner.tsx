/**
 * @name Spinner
 * @description {description}
 *
 */
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {
  size: number | 'small' | 'large';
  color: string;
}

const Spinner: React.FC<Props> = ({size, color}) => {
  const {style} = ThemeProvider('Spinner');
  return (
    <View style={style.container} testID="Spinner">
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Spinner;
