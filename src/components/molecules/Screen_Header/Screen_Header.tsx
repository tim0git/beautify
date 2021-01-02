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
  headerText: string;
  type: string;
  testID?: string;
}

const Screen_Header: React.FC<Props> = ({headerText, testID, type}) => {
  const {config, style} = ThemeProvider('Screen_Header');

  const {screenHeaderTextProps} = config;
  return (
    <View style={style.container[type]} testID={testID || 'Screen_Header'}>
      <Text content={headerText} {...screenHeaderTextProps[type]} />
    </View>
  );
};

export default Screen_Header;
