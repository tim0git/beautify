import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Screen_Instructions from './Screen_Instructions';

const defaultProps = {
  titleProps: {
    title: 'Start searching',
    accessible: true,
    accessibilityLabel: 'TEST',
    accessibilityHint: 'TEST',
    accessibilityRole: 'text',
    testID: 'TEST',
  },
  subTitleProps: {
    subTitle: 'Browse by catergory or by practitioner',
    accessible: true,
    accessibilityLabel: 'TEST',
    accessibilityHint: 'TEST',
    accessibilityRole: 'text',
    testID: 'TEST',
  },
};

storiesOf('Screen_Instructions', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Screen_Instructions_Default', () => <Screen_Instructions {...defaultProps} />);
