import React from 'react';
import {Button as ButtonRN, View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {
  title: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({title, onPress}) => {
  const {styles} = ThemeProvider('Button');

  return (
    <View style={styles.container}>
      <ButtonRN title={title} accessibilityLabel="button" color="blue" onPress={onPress} />
    </View>
  );
};

export default Button;
