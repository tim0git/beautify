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
  testID: string;
}

const Spinner: React.FC<Props> = ({size, color, testID}) => {
  const {style} = ThemeProvider('Spinner');
  return (
    <View style={style.container} testID={testID || 'Spinner'}>
      <ActivityIndicator size={size} color={color} testID="Spinner_Activity_Indicator" />
    </View>
  );
};

export default Spinner;
