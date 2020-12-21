import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import Button_Default from '../../atoms/button/Button';

export interface Props {
  subscribeFireBaseAuth: () => {};
}

const Landing_Page: React.FC<Props> = ({subscribeFireBaseAuth}) => {
  useEffect(() => {
    subscribeFireBaseAuth();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Text testID="Landing_Page-Page_Title">beautify</Text>
          <Button_Default title="Lets Begin" />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default Landing_Page;
