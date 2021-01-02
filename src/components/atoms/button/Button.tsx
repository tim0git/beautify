import React from 'react';
import {Pressable, Text, View} from 'react-native';
import IconRN from '../Icon/Icon';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {
  title: string;
  type: string;
  iconLeft?: boolean;
  iconRight?: boolean;
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
  iconRight,
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
    <Pressable
      style={styles.wrapper[type]}
      onPress={handlePress}
      testID={testID || 'Button-Container'}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={'button'}>
      <View style={styles.container[type]}>
        {iconLeft && <IconRN {...iconProps} testID="Button-IconLeft" />}
        <View style={styles.textContainer[type]}>
          <Text style={styles.text[type]} testID="Button-Text">
            {title}
          </Text>
        </View>
        {iconRight && <IconRN {...iconProps} testID="Button-IconRight" />}
      </View>
    </Pressable>
  );
};

export default Button;
