import React from 'react';
import {Pressable, Text, View} from 'react-native';
import IconRN from '../Icon/Icon';
import {ThemeProvider} from '../../../services/ThemeProvider';

export interface Props {
  title: string;
  type: string | 'HeaderBackButton' | 'Menu' | 'Secondary' | 'Primary' | 'SearchBar' | 'NoBorder';
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

  const renderHeaderBackButton = type === 'HeaderBackButton';

  const handlePress = () => {
    !disabled && onPress();
  };

  const getLeftIconProps = () => {
    if (type === 'Menu') {
      return config.MENULEFT[title];
    }

    return iconProps;
  };
  const renderButton = () => {
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
          {iconLeft && <IconRN {...getLeftIconProps()} testID="Button-IconLeft" />}
          {renderHeaderBackButton && <IconRN {...iconProps} testID="Button_Back_Button_Icon" />}
          {title && (
            <View style={styles.textContainer[type]}>
              <Text style={styles.text[type]} testID="Button-Text">
                {title}
              </Text>
            </View>
          )}
          {iconRight && <IconRN {...iconProps} testID="Button-IconRight" />}
        </View>
      </Pressable>
    );
  };
  return renderButton();
};

export default Button;
