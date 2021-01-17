/**
 * @name Header
 * @description {description}
 *
 */
import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import Text from '../Text/Text';
import Button from '../Button/Button';
import * as RootNavigation from '../../../RootNavigation';

export interface Props {
  headerText: string;
  type: string;
  backButton: boolean;
  testID?: string;
}

const Header: React.FC<Props> = ({headerText, testID, type, backButton = false}) => {
  const {config, style} = ThemeProvider('Header');

  const {backButtonProps, screenHeaderTextProps} = config;

  return (
    <View style={style.container[type]} testID={testID || 'Header'}>
      {backButton && (
        <View style={style.backButtonContainer}>
          <Button {...backButtonProps} onPress={RootNavigation.goBack} testID="Header_Back_Button" />
        </View>
      )}
      <View style={style.titleContainer[type][backButton]}>
        <Text content={headerText} {...screenHeaderTextProps[type]} />
      </View>
    </View>
  );
};

export default Header;
