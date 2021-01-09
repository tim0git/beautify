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
  const {style} = ThemeProvider('Loading');

  return (
    <View style={style.pageWrapper} testID={testID || 'Loading'}>
      <Spinner size="large" color="#ff6bb3" testID="Loading_Spinner" />
    </View>
  );
};

export default Loading;
