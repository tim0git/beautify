import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../../storybook/stories/CenterView';
import WebView_Screen from './WebView_Screen';

const defaultProps = {
  navigation: {
    navigate: () => {},
  },
  route: {
    params: {
      title: 'About Beautify',
    },
  },
};

const errorProps = {
  ...defaultProps,
  route: {
    params: {
      title: 'TEST_ERROR_WEBVIEW_URL',
    },
  },
};

storiesOf('Design System/Screens/WebView_Screen', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('WebView_Screen_Default', () => <WebView_Screen {...defaultProps} />)
  .add('WebView_Screen_Error', () => <WebView_Screen {...errorProps} />);
