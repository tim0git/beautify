/**
 * @name Help_Centre
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

const Profile_Help_Centre_Screen: React.FC<Props> = ({}) => {
  const {config, style} = ThemeProvider('Help_Centre');
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
      testID="Help_Centre_Default_Screen_Template"
      render={renderContent()}
      backButton={backButton}
    />
  );
};

export default Profile_Help_Centre_Screen;
