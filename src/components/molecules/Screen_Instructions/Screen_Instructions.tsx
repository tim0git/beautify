import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Text from '../../atoms/Text/Text';

export interface Props {
  instructionProps: {
    content: string;
    type: string;
    testID: string;
  };
  bodyProps: {
    content: string;
    type: string;
    testID: string;
  };
  testID: string;
}

const Screen_Instructions: React.FC<Props> = ({instructionProps, bodyProps, testID}) => {
  const {styles} = ThemeProvider('Screen_Instructions');

  return (
    <View style={styles.headerContainer} testID={testID || 'Screen_Instructions'}>
      {instructionProps && (
        <View style={styles.instructionContainer}>
          <Text {...instructionProps} testID={instructionProps.testID || 'Screen_Instructions_Title'} />
        </View>
      )}
      {bodyProps && (
        <View style={styles.bodyContainer}>
          <Text {...bodyProps} testID={bodyProps.testID || 'Screen_Instructions_SubTitle'} />
        </View>
      )}
    </View>
  );
};

export default Screen_Instructions;
