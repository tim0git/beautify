import React from 'react';
import {Text, View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {
  title: string;
  accessible: boolean;
  accessibilityLabel: string;
  accessibilityHint: string;
  testID: string;
}

const Title: React.FC<Props> = ({title, testID, accessible, accessibilityLabel, accessibilityHint}) => {
  const {styles} = ThemeProvider('Title');

  return (
    <View style={styles.container}>
      <Text
        testID={testID}
        style={styles.text}
        accessible={accessible}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}>
        {title}
      </Text>
    </View>
  );
};

export default Title;
