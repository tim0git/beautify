/**
 * @name Default_Screen
 * @description {description}
 *
 */
import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import Header from '../../atoms/Header/Header';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Loading from '../../molecules/Loading/Loading';

export interface Props {
  screenTitle: string;
  render: any;
  backButton: boolean;
  testID: string;
  isLoading?: boolean;
  showHeader?: boolean;
}

const Default_Screen_Template: React.FC<Props> = ({
  screenTitle,
  backButton,
  render,
  testID,
  isLoading,
  showHeader = true,
}) => {
  const {style} = ThemeProvider('Default_Screen');
  const {barStyle} = ThemeProvider('global').styles;

  const renderLoading = () => {
    return <Loading testID="Default_Screen_Template_Loading" />;
  };

  const renderContent = () => {
    return <View testID="Default_Screen_Template_Content">{render}</View>;
  };

  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={style.pageWrapper} testID={testID ? testID : 'Default_Screen_Template'}>
        {showHeader && (
          <Header
            backButton={backButton}
            headerText={screenTitle}
            type="Screen"
            testID="Default_Screen_Template_Screen_Header"
          />
        )}
        {isLoading ? renderLoading() : renderContent()}
      </SafeAreaView>
    </>
  );
};

export default Default_Screen_Template;
