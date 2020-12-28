import React from 'react';
import {TouchableWithoutFeedback, Text, View} from 'react-native';
import IconRN from '../Icon/Icon';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {
  title: string;
  type: string;
  iconLeft?: boolean;
  onPress: () => void;
  accessible: boolean;
  accessibilityLabel: string;
  accessibilityHint: string;
  disabled: boolean;
  testID: string;
}

const Button: React.FC<Props> = ({
  title,
  testID,
  type = 'default',
  iconLeft,
  onPress,
  disabled,
  accessible,
  accessibilityLabel,
  accessibilityHint,
}) => {
  const {styles, config} = ThemeProvider('Button');

  const iconProps = config[type];

  const handlePress = () => {
    !disabled && onPress();
  };

  return (
    <TouchableWithoutFeedback
      onPress={handlePress}
      testID={testID || 'Button-Container'}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={'button'}>
      <View style={styles.container[type]}>
        {iconLeft && <IconRN {...iconProps} testID="Button-IconLeft" />}
        <Text style={styles.text[type]} testID="Button-Text">
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
