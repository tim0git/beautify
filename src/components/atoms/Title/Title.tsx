import React from 'react';
import {TouchableWithoutFeedback, Text, View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {
  title: string;
  textAlign: string;
  accessible: boolean;
  accessibilityLabel: string;
  accessibilityHint: string;
  accessibilityRole: string;
  testID: string;
}

const Title: React.FC<Props> = ({title, textAlign = 'center'}) => {
  const {styles} = ThemeProvider('Title');

  return (
    <View style={styles.container}>
      <Text style={styles.textAlign[textAlign]}>{title}</Text>
    </View>
  );
};

export default Title;
