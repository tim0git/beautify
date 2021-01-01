import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Login_Cluster from './Login_Cluster';

const defaultProps = {
  navigation: {
    naviagte: () => {},
  },
};

storiesOf('Login_Cluster', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Login_Cluster_Default', () => <Login_Cluster {...defaultProps} />);
