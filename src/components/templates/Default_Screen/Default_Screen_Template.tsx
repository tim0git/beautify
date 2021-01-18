/**
 * @name Default_Screen
 * @description {description}
 *
 */
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Header from '../../atoms/Header/Header';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {
  screenTitle: string;
  render: any;
  backButton: boolean;
  testID: string;
}

const Default_Screen_Template: React.FC<Props> = ({screenTitle, backButton, render, testID}) => {
  const {style} = ThemeProvider('Default_Screen');
  const {barStyle} = ThemeProvider('global').styles;
  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={style.pageWrapper} testID={testID ? testID : 'Default_Screen_Template'}>
        <Header
          backButton={backButton}
          headerText={screenTitle}
          type="Screen"
          testID="Default_Screen_Template_Screen_Header"
        />
        {render}
      </SafeAreaView>
    </>
  );
};

export default Default_Screen_Template;
