import React from 'react';
import {TouchableWithoutFeedback, Text, View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {
  subTitle: string;
  textAlign: string;
  accessible: boolean;
  accessibilityLabel: string;
  accessibilityHint: string;
  accessibilityRole: string;
  testID: string;
}

const SubTitle: React.FC<Props> = ({subTitle, textAlign = 'center'}) => {
  const {styles} = ThemeProvider('SubTitle');

  return (
    <View style={styles.container}>
      <Text style={styles.textAlign[textAlign]}>{subTitle}</Text>
    </View>
  );
};

export default SubTitle;
