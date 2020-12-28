import React from 'react';
import {Text, View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {
  subTitle: string;
  accessible: boolean;
  accessibilityLabel: string;
  accessibilityHint: string;
  testID: string;
}

const SubTitle: React.FC<Props> = ({subTitle, testID, accessible, accessibilityLabel, accessibilityHint}) => {
  const {styles} = ThemeProvider('SubTitle');

  return (
    <View style={styles.container} testID={testID || 'SubTitle-Container'}>
      <Text
        testID={'SubTitle-Text'}
        style={styles.text}
        accessible={accessible}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        accessibilityRole="text">
        {subTitle}
      </Text>
    </View>
  );
};

export default SubTitle;
