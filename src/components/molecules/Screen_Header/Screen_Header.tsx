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
}

const Screen_Header: React.FC<Props> = ({screenTitle}) => {
  const {config, style} = ThemeProvider('Screen_Header');

  const {ScreenHeaderTextProps} = config;
  return (
    <View style={style.container} testID="Screen_Header">
      <Text content={screenTitle} {...ScreenHeaderTextProps} />
    </View>
  );
};

export default Screen_Header;
