/**
 * @name Login_Cluster
 * @description {description}
 *
 */
import React from 'react';
import {View} from 'react-native';
import Button from '../../atoms/Button/Button';
import Text from '../../atoms/Text/Text';
import {ThemeProvider} from '../../../services/ThemeProvider';

export type captionPropsType = {
  content: string;
  type: string;
  testID: string;
};

export interface Props {
  navigation: {
    navigate: (navigationAddress: string) => void;
  };
  captionProps?: captionPropsType;
  testID: string;
}

const Login_Cluster: React.FC<Props> = ({navigation, captionProps, testID}) => {
  const {style, config} = ThemeProvider('Login_Cluster');

  const {treatmentButtonProps, loginButtonProps, navigationProps} = config;

  const handleOnPress = (navigationAddress: string) => {
    navigation.navigate(navigationAddress);
  };

  const getCaptionProps = () => {
    const captionPropValues: captionPropsType = {
      content: captionProps?.content ?? config.captionProps.content,
      type: captionProps?.type ?? config.captionProps.type,
      testID: captionProps?.testID ?? config.captionProps.testID,
    };

    return captionPropValues;
  };

  return (
    <View style={style.container} testID={testID || 'Login_Cluster'}>
      <View style={style.treatmentButtonContainer}>
        <Button
          {...treatmentButtonProps}
          onPress={() => {
            handleOnPress(navigationProps.treatment);
          }}
        />
      </View>
      <View style={style.captionContainer}>
        <Text {...getCaptionProps()} />
      </View>
      <View style={style.loginButtonContainer}>
        <Button
          {...loginButtonProps}
          onPress={() => {
            handleOnPress(navigationProps.login);
          }}
        />
      </View>
    </View>
  );
};

export default Login_Cluster;
