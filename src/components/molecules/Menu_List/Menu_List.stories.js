import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Menu_List from './Menu_List';

const defaultProps = {
  navigation: {
    navigate: () => {},
  },
  headerTextProps: {
    headerText: 'General',
    testID: 'TEST_HEADER_TEXT_TEST_ID',
  },
  DATA: [
    {
      id: 'About Beautify',
      title: 'About Beautify',
      navigationAddress: 'About_Beautify',
      testID: 'TEST_ABOUT_BEAUTIFY_MENU_BUTTON_TEST_ID',
    },
    {
      id: 'Help Center',
      title: 'Help Center',
      navigationAddress: 'Help_Center',
      testID: 'TEST_HELP_CENTER_MENU_BUTTON_TEST_ID',
    },
    {
      id: 'Legal Stuff',
      title: 'Legal Stuff',
      navigationAddress: 'Legal',
      testID: 'TEST_LEGAL_STUFF_MENU_BUTTON_TEST_ID',
    },
  ],
};

storiesOf('Design System/Molecule/Menu_List', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Menu_List_Default', () => <Menu_List {...defaultProps} />);
