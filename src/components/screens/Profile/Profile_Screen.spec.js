import React from 'react';
import {mount} from 'enzyme';
import {MockedProvider} from '@apollo/client/testing';
import Profile_Screen from './Profile_Screen';

const mocks = [];

const defaultProps = {
  navigation: {
    navigate: jest.fn(),
  },
};

describe('<Profile_Screen>', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  describe('<Render>', () => {
    test('should render a search bar', () => {
      const wrapper = mount(
        <MockedProvider>
          <Profile_Screen {...defaultProps} />
        </MockedProvider>,
      );
      const ProfileBar = wrapper.findWhere((node) => node.prop('testID') === 'Profile_Screen');

      expect(ProfileBar).toExist();
    });
    test('should render a Guest_Welcome component', () => {
      const wrapper = mount(
        <MockedProvider mocks={mocks}>
          <Profile_Screen {...defaultProps} />
        </MockedProvider>,
      );
      const ProfileBar = wrapper.findWhere((node) => node.prop('testID') === 'Profile_Screen_Guest_Welcome');

      expect(ProfileBar).toExist();
    });
  });
});
