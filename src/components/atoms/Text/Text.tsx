/**
 * @name Text
 * @description {description}
 *
 */
import React from 'react';
import {View, Text as TextRN} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {}

const Text: React.FC<Props> = ({}) => {
  const {style} = ThemeProvider('Text');
  return (
    <View style={style.container} testID="Text">
      <TextRN>Text</TextRN>
    </View>
  );
};

export default Text;
