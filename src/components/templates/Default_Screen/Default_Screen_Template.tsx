/**
 * @name Default_Screen
 * @description {description}
 *
 */
import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
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
  headerRHSButtonAction?: () => void;
}

const Default_Screen_Template: React.FC<Props> = ({
  screenTitle,
  backButton,
  render,
  testID,
  isLoading,
  showHeader = true,
  headerRHSButtonAction,
}) => {
  const {style} = ThemeProvider('Default_Screen');
  const {barStyle} = ThemeProvider('global').styles;

  const renderLoading = () => {
    return <Loading testID="Default_Screen_Template_Loading" />;
  };

  const renderContent = () => {
    return render;
  };

  return (
    <>
      <StatusBar barStyle={barStyle} />
      <View style={style.pageWrapper}>
        <SafeAreaView testID={testID ? testID : 'Default_Screen_Template'}>
          {showHeader && (
            <Header
              backButton={backButton}
              nextButton={!!headerRHSButtonAction}
              headerText={screenTitle}
              type="Screen"
              testID="Default_Screen_Template_Screen_Header"
              headerRHSButtonAction={headerRHSButtonAction}
            />
          )}
        </SafeAreaView>
        {isLoading ? renderLoading() : renderContent()}
      </View>
    </>
  );
};

export default Default_Screen_Template;
