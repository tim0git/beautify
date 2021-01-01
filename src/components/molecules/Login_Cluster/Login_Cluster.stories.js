import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import Login_Cluster from './Login_Cluster';

const defaultProps = {
  treatmentButtonProps: {
    title: 'Find a Treatment',
    type: 'Primary',
    iconLeft: false,
    iconRight: true,
    onPress: () => {},
    accessible: true,
    accessibilityLabel: 'Navigate to Search for a Treatment',
    accessibilityHint: 'Press to navigate to the Search for treatment screen',
    disabled: false,
    testID: 'LOGIN_CLUSTER_TEST_FIND_A_TREATMENT_BUTTON',
  },
  captionProps: {
    content: 'If you already have an account',
    type: 'Caption',
    testID: 'LOGIN_CLUSTER_TEST_CAPTION',
  },
  loginButtonProps: {
    title: 'Login here',
    type: 'Secondary',
    iconLeft: false,
    iconRight: true,
    onPress: () => {},
    accessible: true,
    accessibilityLabel: 'Navigate to login screen',
    accessibilityHint: 'Press to navigate to the login screen',
    disabled: false,
    testID: 'LOGIN_CLUSTER_TEST_LOGIN_BUTTON',
  },
  navigation: {
    naviagte: () => {},
  },
};

storiesOf('Login_Cluster', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Login_Cluster_Default', () => <Login_Cluster {...defaultProps} />);
