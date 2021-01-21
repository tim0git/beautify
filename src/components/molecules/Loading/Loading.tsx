/**
 * @name Loading
 * @description {description}
 *
 */
import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Spinner from '../../atoms/Spinner/Spinner';
export interface Props {
  testID: string;
}

const Loading: React.FC<Props> = ({testID}) => {
  const {style, config} = ThemeProvider('Loading');
  const {spinnerProps} = config;
  return (
    <View style={style.pageWrapper} testID={testID || 'Loading'}>
      <Spinner {...spinnerProps} testID="Loading_Spinner" />
    </View>
  );
};

export default Loading;
