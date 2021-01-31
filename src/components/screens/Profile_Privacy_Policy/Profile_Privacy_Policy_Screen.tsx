/**
 * @name Profile_Privacy_Policy
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

const Profile_Privacy_Policy_Screen: React.FC<Props> = ({}) => {
  const {config, style} = ThemeProvider('Profile_Privacy_Policy');
  const {screenTitle, backButton} = config;

  const renderContent = () => {
    return (
      <View style={style.container}>
        <Text>Placeholder</Text>
      </View>
    );
  };
  return (
    <Default_Screen_Template
      screenTitle={screenTitle}
      testID="Profile_Privacy_Policy_Default_Screen_Template"
      render={renderContent()}
      backButton={backButton}
    />
  );
};

export default Profile_Privacy_Policy_Screen;
