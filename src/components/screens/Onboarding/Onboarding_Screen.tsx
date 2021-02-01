/**
 * @name Onboarding
 * @description {description}
 *
 */
import React from 'react';
import {View} from 'react-native';
import Login_Cluster from '../../molecules/Login_Cluster/Login_Cluster';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Default_Screen_Template from '../../templates/Default_Screen/Default_Screen_Template';

export interface Props {
  navigation: {
    navigate: () => void;
  };
}

const Onboarding_Screen: React.FC<Props> = ({navigation}) => {
  const {config, style} = ThemeProvider('Onboarding');
  const {screenTitle, backButton} = config;

  const renderOnboarding = () => {
    return (
      <View style={style.container}>
        <View style={style.loginClusterContainer}>
          <Login_Cluster navigation={navigation} testID="Onboarding_Screen_Login_Cluster" />
        </View>
      </View>
    );
  };
  return (
    <Default_Screen_Template
      screenTitle={screenTitle}
      testID="Onboarding_Default_Screen_Template"
      render={renderOnboarding()}
      backButton={backButton}
    />
  );
};

export default Onboarding_Screen;
