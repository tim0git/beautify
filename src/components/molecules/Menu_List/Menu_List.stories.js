import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Menu_List from './Menu_List';
import {PROFILE_GUEST_MENU} from '../../../theme/global/config';

const defaultProps = {
  navigation: {
    navigate: () => {},
  },
  DATA: PROFILE_GUEST_MENU.DATA,
  headerText: PROFILE_GUEST_MENU.headerText,
  testID: 'TEST_HEADER_TEXT_TEST_ID',
};

storiesOf('Design System/Molecule/Menu_List', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Menu_List_Default', () => <Menu_List {...defaultProps} />);
