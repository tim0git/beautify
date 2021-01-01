/**
 * @name Guest_Welcome
 * @description {description}
 *
 */
import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Screen_Instructions from '../../molecules/Screen_Instructions/Screen_Instructions';
import Login_Cluster from '../../molecules/Login_Cluster/Login_Cluster';

export interface Props {
  screenInstructionsProps: {
    instructionProps: {
      content: string;
      type: string;
      testID: string;
    };
    bodyProps: {
      content: string;
      type: string;
      testID: string;
    };
  };
  loginClusterProps?: {
    captionProps: {
      content: string;
      type: string;
      testID: string;
    };
  };
  navigation: {
    navigate: (navigationAddress: string) => void;
  };
}

const Guest_Welcome: React.FC<Props> = ({screenInstructionsProps, navigation, loginClusterProps}) => {
  const {style} = ThemeProvider('Guest_Welcome');
  return (
    <View style={style.container} testID="Guest_Welcome">
      <Screen_Instructions {...screenInstructionsProps} />
      <Login_Cluster navigation={navigation} {...loginClusterProps} />
    </View>
  );
};

export default Guest_Welcome;
