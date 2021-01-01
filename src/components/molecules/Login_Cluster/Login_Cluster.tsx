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

export interface Props {
  navigation: {
    navigate: (event: string) => void;
  };
}

const Login_Cluster: React.FC<Props> = ({navigation}) => {
  const {style, config} = ThemeProvider('Login_Cluster');

  const {treatmentButtonProps, captionProps, loginButtonProps} = config;

  const handleOnPress = (event: string) => {
    navigation.navigate(event);
  };

  return (
    <View style={style.container} testID="Login_Cluster">
      <View style={style.treatmentButtonContainer}>
        <Button
          {...treatmentButtonProps}
          onPress={() => {
            handleOnPress('Search');
          }}
        />
      </View>
      <View style={style.captionContainer}>
        <Text {...captionProps} />
      </View>
      <View style={style.loginButtonContainer}>
        <Button
          {...loginButtonProps}
          onPress={() => {
            handleOnPress('Login');
          }}
        />
      </View>
    </View>
  );
};

export default Login_Cluster;
