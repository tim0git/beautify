import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Default_Screen_Template from './Default_Screen_Template';

const defaultProps = {
  screenTitle: 'Default Screen Template',
  render: () => {
    null;
  },
  backButton: true,
  testID: 'Default_Screen_Template_Story',
};

storiesOf('Default_Screen', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default_Screen_Back_Button', () => <Default_Screen_Template {...defaultProps} />);
