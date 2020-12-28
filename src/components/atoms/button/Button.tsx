import React from 'react';
import {TouchableWithoutFeedback, Text, View} from 'react-native';
import IconMCI from '../../../components/atoms/Icon/IconMCI';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {
  title: string;
  type: string;
  iconLeft: boolean;
  onPress: () => void;
  accessible: boolean;
  accessibilityLabel: string;
  accessibilityHint: string;
  accessibilityRole: string;
  disabled: boolean;
  testID: string;
}

const Button: React.FC<Props> = ({title, type = 'default', iconLeft, onPress}) => {
  const {styles, config} = ThemeProvider('Button');

  const iconProps = config[type];

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container[type]}>
        {iconLeft && <IconMCI {...iconProps} />}
        <Text style={styles.text[type]}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
