import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {}

const Inbox_Screen: React.FC<Props> = ({}) => {
  const {styles} = ThemeProvider('Inbox');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Inbox Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Inbox_Screen;
