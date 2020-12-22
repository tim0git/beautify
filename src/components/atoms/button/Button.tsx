import React from 'react';
import {Button as ButtonRN, StyleSheet, Text, View} from 'react-native';

export interface Props {
  title: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <ButtonRN
        title={title}
        accessibilityLabel="button"
        color="blue"
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default Button;
