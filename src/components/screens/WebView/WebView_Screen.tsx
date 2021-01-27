/**
 * @name WebView_Screen
 * @description {description}
 *
 */
import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import {WebView} from 'react-native-webview';
import Loading from '../../molecules/Loading/Loading';
import Default_Screen_Template from '../../templates/Default_Screen/Default_Screen_Template';

export interface Props {
  route: {
    params: {
      title: string;
    };
  };
}

const WebView_Screen: React.FC<Props> = ({route}) => {
  const {config, style} = ThemeProvider('WebView');
  const {WEB_VIEW_URLS} = ThemeProvider('global').config;
  const {WebViewProps} = config;

  const _renderLoading = () => {
    return (
      <View style={style.webViewLoading}>
        <Loading testID="WebView_Screen_Loading" />
      </View>
    );
  };

  const renderWebView = () => {
    return (
      <View style={style.container}>
        <WebView
          {...WebViewProps}
          testID="WebView_Screen_WebView"
          source={{uri: WEB_VIEW_URLS[route.params.title]}}
          style={style.webView}
          startInLoadingState={true}
          renderLoading={_renderLoading}
        />
      </View>
    );
  };

  return (
    <Default_Screen_Template
      screenTitle={route.params.title}
      testID="WebView_Default_Screen_Template"
      render={renderWebView()}
      backButton={true}
    />
  );
};

export default WebView_Screen;
