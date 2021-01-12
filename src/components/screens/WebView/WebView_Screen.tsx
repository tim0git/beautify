/**
 * @name WebView_Screen
 * @description {description}
 *
 */
import React from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import {WebView} from 'react-native-webview';
import Header from '../../atoms/Header/Header';
import Loading from '../../molecules/Loading/Loading';

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

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={style.pageWrapper} testID="WebView_Screen">
        <Header headerText={route.params.title} type="Screen" testID="WebView_Screen_Header" />
        <View style={style.container}>
          <WebView
            {...WebViewProps}
            testID="WebView_Screen_WebView"
            source={{uri: WEB_VIEW_URLS[route.params.title]}}
            style={style.webView}
            startInLoadingState={true}
            renderLoading={() => <Loading testID="WebView_Screen_Loading" />}
            renderError={() => {
              <Text testID="WebView_Screen_Error">Error...</Text>;
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default WebView_Screen;
