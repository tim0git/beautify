import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {}

const Profile_Screen: React.FC<Props> = ({}) => {
  const {styles} = ThemeProvider('Profile');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Profile Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Profile_Screen;
