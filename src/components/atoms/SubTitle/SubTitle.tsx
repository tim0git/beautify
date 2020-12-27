import React from 'react';
import {TouchableWithoutFeedback, Text, View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {
  subTitle: string;
  accessible: boolean;
  accessibilityLabel: string;
  accessibilityHint: string;
  accessibilityRole: string;
  testID: string;
}

const SubTitle: React.FC<Props> = ({subTitle}) => {
  const {styles} = ThemeProvider('SubTitle');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{subTitle}</Text>
    </View>
  );
};

export default SubTitle;
