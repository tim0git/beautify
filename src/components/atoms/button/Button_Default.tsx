import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export interface Props {
  title: string;
}

const Button_Default: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <Button
        title={title}
        accessibilityLabel="button"
        color="blue"
        onPress={() => {}}
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

export default Button_Default;
