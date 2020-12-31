/**
 * @name Text
 * @description {description}
 *
 */
import React from 'react';
import {View, Text as TextRN} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {
  content: string;
  type: string;
  testID: string;
}

const Text: React.FC<Props> = ({content, type, testID}) => {
  const {style} = ThemeProvider('Text');
  return (
    <View style={style.container[type]} testID={testID || 'Title-Container'}>
      <TextRN testID={'Text-Text'} style={style.text[type]} accessibilityRole="text">
        {content}
      </TextRN>
    </View>
  );
};

export default Text;
