import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Search_Bar from './Search_Bar';

const defaultProps = {
  onChange: () => {},
  testID: 'TEST_SEARCH_BAR_TEST_ID',
};

storiesOf('Search_Bar', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Search_Bar_Default', () => <Search_Bar {...defaultProps} />);
