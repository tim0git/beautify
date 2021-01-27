/**
 * @name Profile_Marketing
 * @description {description}
 *
 */
import React, {useState} from 'react';
import {View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Default_Screen_Template from '../../templates/Default_Screen/Default_Screen_Template';
import Linked_Text from '../../molecules/Linked_Text/Linked_Text';
import Menu_Mapper from '../../organisms/Menu_Mapper/Menu_Mapper';

export interface Props {
  navigation: {
    navigate: () => void;
  };
}

const Profile_Marketing_Screen: React.FC<Props> = ({navigation}) => {
  const {config, dict, style} = ThemeProvider('Profile_Marketing');
  const {MARKETING_MENU} = ThemeProvider('global').config;
  const {backButton, screenTitle, linkedTextProps} = config;
  const {marketingMessage} = dict;

  // Replace with GraphQL Mutation & Query.
  const [switchState, setMarketingSettings] = useState({
    'Via Email': true,
    'Via SMS': false,
  });
  const onValueChange = (title: string) => {
    setMarketingSettings({...switchState, [title]: !switchState[title]});
  };

  const renderMarketingPreferences = () => {
    return (
      <View>
        <View style={style.messageContainer}>
          <Linked_Text content={marketingMessage} {...linkedTextProps} testID="Profile_Marketing_Linked_Text" />
        </View>
        <View style={style.menuContainer}>
          <Menu_Mapper
            menuData={MARKETING_MENU}
            navigation={navigation}
            onValueChange={onValueChange}
            switchState={switchState}
            testID="Profile_Marketing_Menu_Mapper"
          />
        </View>
      </View>
    );
  };

  return (
    <Default_Screen_Template
      screenTitle={screenTitle}
      testID="Profile_Marketing_Default_Screen_Template"
      render={renderMarketingPreferences()}
      backButton={backButton}
    />
  );
};

export default Profile_Marketing_Screen;
