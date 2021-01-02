import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Guest_Welcome from './Guest_Welcome';

const defaultProps = {
  screenInstructionsProps: {
    instructionProps: {
      content: 'No Bookings made yet.',
      type: 'Instruction',
      testID: 'TEST_GUEST_WELCOME_INSTRUCTION',
    },
    bodyProps: {
      content:
        'Once you have made a booking, you can view and manage them here. Search providers to find a treatment for you.',
      type: 'Body',
      testID: 'TEST_GUEST_WELCOME_BODY',
    },
  },
  navigation: {
    navigate: () => {},
  },
};

storiesOf('Design System/Organism/Guest_Welcome', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Guest_Welcome_Default', () => <Guest_Welcome {...defaultProps} />);
