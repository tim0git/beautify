import React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Menu_Mapper from './Menu_Mapper';
import {USER_PROFILE_MENU, PROFILE_GUEST_MENU} from '../../../theme/global/config/Constants';

const guestProps = {
  navigation: {navigate: () => {}},
  userProfileMenu: [PROFILE_GUEST_MENU],
};

const userProps = {
  navigation: {navigate: () => {}},
  userProfileMenu: USER_PROFILE_MENU,
};

describe('<Menu_Mapper />', () => {
  describe('<Render>', () => {
    test('should render guest profile menu list when passed as a prop', () => {
      const wrapper = shallow(<Menu_Mapper {...guestProps} />);
      const profileGuestMenu = wrapper.findWhere((node) => node.prop('testID') === 'Profile_Guest_Menu');
      expect(profileGuestMenu).toExist();
    });
    test('should render user profile menu list when passed as a prop', () => {
      const wrapper = shallow(<Menu_Mapper {...userProps} />);
      const profileUserMenu = wrapper.findWhere((node) => node.prop('testID') === 'Profile_User_Menu');
      expect(profileUserMenu).toExist();
    });
  });
});
