/**
 * @name Profile_Marketing
 * @description {description}
 *
 */
import React from 'react';
// import {View, Text} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Default_Screen_Template from '../../templates/Default_Screen/Default_Screen_Template';

export interface Props {}

const Profile_Marketing_Screen: React.FC<Props> = ({}) => {
  const {config, dict, style} = ThemeProvider('Profile_Marketing');

  const {backButton, screenTitle} = config;

  return (
    <Default_Screen_Template
      screenTitle={screenTitle}
      testID="Profile_Marketing_Default_Screen_Template"
      render={null}
      backButton={backButton}
    />
  );
};

export default Profile_Marketing_Screen;
