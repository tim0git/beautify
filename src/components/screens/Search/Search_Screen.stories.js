import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Search_Screen from './Search_Screen';
import {MockedProvider} from '@apollo/client/testing';
const mocks = [];

storiesOf('Design System/Screens/Search_Screen', module)
  .addDecorator((getStory) => <MockedProvider mocks={mocks}>{getStory()}</MockedProvider>)
  .add('Search', () => <Search_Screen />);
