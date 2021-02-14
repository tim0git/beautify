/**
 * @name Onboarding
 * @description {description}
 *
 */
import React, {useEffect} from 'react';
import {View} from 'react-native';
import Login_Cluster from '../../molecules/Login_Cluster/Login_Cluster';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Default_Screen_Template from '../../templates/Default_Screen/Default_Screen_Template';
import {ONBOARDING_STATUS} from '../../../state/Onboarding.state';
import Carousel_View from '../../atoms/Carousel_View/Carousel_View';
import Onboarding_Card from '../../organisms/Onboarding_Card/Onboarding_Card';

export interface Props {
  navigation: {
    navigate: (path: string) => void;
  };
  onboardingStatus: 'complete' | 'incomplete';
  skipOnboarding: () => void;
}

const Onboarding_Screen: React.FC<Props> = ({navigation, onboardingStatus, skipOnboarding}) => {
  const {config, style} = ThemeProvider('Onboarding');
  const {ONBOARDING} = ThemeProvider('global').config;
  const {screenTitle, backButton} = config;

  useEffect(() => {
    if (onboardingStatus === ONBOARDING_STATUS.complete) {
      navigation.navigate('Home');
    }
  }, [onboardingStatus, navigation]);

  const renderOnboarding = () => {
    return (
      <View style={style.container}>
        <View style={style.carouselContainer}>
          <Carousel_View
            carouselData={ONBOARDING}
            carouselComponent={Onboarding_Card}
            showPagination={true}
            testID="Onboarding_Carousel"
          />
        </View>
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
      headerRHSButtonAction={skipOnboarding}
    />
  );
};

export default Onboarding_Screen;
