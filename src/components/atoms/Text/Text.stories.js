import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Text from './Text';

const titleProps = {
  content: 'Start searching',
  type: 'Title',
  testID: 'TEST_TITLE',
};

const subTitleProps = {
  content: 'Browse by category or practitioner',
  type: 'SubTitle',
  testID: 'TEST_SUB_TITLE',
};

storiesOf('Text', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Text_Title', () => <Text {...titleProps} />)
  .add('Text_SubTitle', () => <Text {...subTitleProps} />);
