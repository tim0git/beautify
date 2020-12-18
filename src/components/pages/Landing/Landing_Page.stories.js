import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Landing_Page from './Landing_Page';

storiesOf('Landing_Page', module).add('Default', () => <Landing_Page />);

//   .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
// import CenterView from '../CenterView';
