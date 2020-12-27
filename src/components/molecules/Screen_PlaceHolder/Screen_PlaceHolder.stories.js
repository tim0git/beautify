import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Screen_PlaceHolder from './Screen_PlaceHolder';

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

storiesOf('Screen_PlaceHolder', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Screen_PlaceHolder_Default', () => <Screen_PlaceHolder {...defaultProps} />);
