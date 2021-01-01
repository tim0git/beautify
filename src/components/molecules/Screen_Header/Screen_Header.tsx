/**
 * @name Screen_Header
 * @description {description}
 *
 */
import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Text from '../../atoms/Text/Text';

export interface Props {
  screenTitle: string;
  testID?: string;
}

const Screen_Header: React.FC<Props> = ({screenTitle, testID}) => {
  const {config, style} = ThemeProvider('Screen_Header');

  const {screenHeaderTextProps} = config;
  return (
    <View style={style.container} testID={testID || 'Screen_Header'}>
      <Text content={screenTitle} {...screenHeaderTextProps} />
    </View>
  );
};

export default Screen_Header;
