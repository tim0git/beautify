/**
 * @name Profile_Legal_Stuff
 * @description {description}
 *
 */
import React from 'react';
import {View, Text} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Default_Screen_Template from '../../templates/Default_Screen/Default_Screen_Template';

export interface Props {
  navigation: {
    navigate: () => void;
  };
}

const Profile_Legal_Stuff_Screen: React.FC<Props> = ({}) => {
  const {config, dict, style} = ThemeProvider('Profile_Legal_Stuff');
  const {screenTitle, backButton} = config;
  return (
    <Default_Screen_Template
      screenTitle={screenTitle}
      testID="Profile_Legal_Stuff_Default_Screen_Template"
      render={null}
      backButton={backButton}
    />
  );
};

export default Profile_Legal_Stuff_Screen;
