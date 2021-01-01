import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Screen_Instructions from './Screen_Instructions';

const defaultProps = {
  instructionProps: {
    content: 'Start searching',
    type: 'Instruction',
    testID: 'TEST',
  },
  bodyProps: {
    content: 'Browse by catergory or by practitioner',
    type: 'Body',
    testID: 'TEST',
  },
};

storiesOf('Screen_Instructions', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Screen_Instructions_Default', () => <Screen_Instructions {...defaultProps} />);
