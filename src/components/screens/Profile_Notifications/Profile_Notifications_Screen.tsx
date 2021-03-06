/**
 * @name Profile_Notifications
 * @description {description}
 *
 */
import React, {useState} from 'react';
import {View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Text from '../../atoms/Text/Text';
import Menu_Mapper from '../../organisms/Menu_Mapper/Menu_Mapper';
import Default_Screen_Template from '../../templates/Default_Screen/Default_Screen_Template';

export interface Props {
  navigation: {
    navigate: () => void;
    goBack: () => void;
  };
}

const Profile_Notifications_Screen: React.FC<Props> = ({navigation}) => {
  const {config, style} = ThemeProvider('Profile_Notifications');
  const {screenTitle, backButton} = config;
  const {NOTIFICATIONS_MENU} = ThemeProvider('global').config;

  // Replace with GraphQL Mutation & Query.
  const [switchState, setNotificationSettings] = useState({
    'Booking Complete': true,
    'Upcoming Appointments (48hr)': true,
    'Upcoming Appointments (24hr)': true,
    'Deposit Taken': true,
    'Remaining Payment Taken': true,
    'Payment Failures': true,
    'New Practitioner': true,
  });
  const onValueChange = (title: string) => {
    setNotificationSettings({...switchState, [title]: !switchState[title]});
  };

  const renderNotificationSettings = () => {
    return (
      <View style={style.container} testID="Profile_Notifications_Screen">
        <View style={style.pageInstructionContainer}>
          <Text
            content="Here you can choose the notifications you want to receive (or not receive)"
            type="Body"
            testID="Notifications_Settings_Instruction_Text"
          />
        </View>
        <Menu_Mapper
          navigation={navigation}
          menuData={NOTIFICATIONS_MENU}
          testID="Notifications_Settings_Menu_Mapper"
          onValueChange={onValueChange}
          switchState={switchState}
        />
      </View>
    );
  };
  return (
    <Default_Screen_Template
      screenTitle={screenTitle}
      testID="Profile_Notifications_Screen_Template"
      render={renderNotificationSettings()}
      backButton={backButton}
    />
  );
};

export default Profile_Notifications_Screen;
