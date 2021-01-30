/**
 * @name Profile_Legal_Stuff
 * @description {description}
 *
 */
import React from 'react';
import {View} from 'react-native';
import Menu_Mapper from '../../organisms/Menu_Mapper/Menu_Mapper';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Default_Screen_Template from '../../templates/Default_Screen/Default_Screen_Template';

export interface Props {
  navigation: {
    navigate: () => void;
  };
}

const Profile_Legal_Stuff_Screen: React.FC<Props> = ({navigation}) => {
  const {config, style} = ThemeProvider('Profile_Legal_Stuff');
  const {LEGAL_STUFF_MENU} = ThemeProvider('global').config;
  const {screenTitle, backButton} = config;

  const renderContent = () => {
    return (
      <View style={style.container}>
        <Menu_Mapper navigation={navigation} menuData={LEGAL_STUFF_MENU} testID="Legal_Stuff_Menu_Mapper" />
      </View>
    );
  };
  return (
    <Default_Screen_Template
      screenTitle={screenTitle}
      testID="Profile_Legal_Stuff_Default_Screen_Template"
      render={renderContent()}
      backButton={backButton}
    />
  );
};

export default Profile_Legal_Stuff_Screen;
